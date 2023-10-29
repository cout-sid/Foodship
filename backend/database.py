import motor.motor_asyncio
# from main import Item
from pydantic import BaseModel

class Item(BaseModel):
    price: int
    quantity: int
    item_id: int
    item_name: str 
    rest_name: str
    # tax: float | None = None


client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.foodship
# collection = database["MelodyHotel"]



async def post_item(item):
    doc = item
    # collection=database[item['rest_name']]
    collection=database["order_list"]
    result = await collection.insert_one(doc)
    return doc

async def remove_item(item_id):
    collection=database["order_list"]
    # await collection.delete_one({"item_id":item_id,"rest_name":rest_name})
    await collection.delete_one({"item_id":item_id})
    return True

async def increase_item(item_id):
    collection=database["order_list"]
    doc=await collection.find_one({"item_id":item_id})
    quantity=doc["quantity"]
    await collection.update_one({"item_id":item_id},{"$set":{"quantity":quantity+1}})
    newdoc=await collection.find_one({"item_id":item_id})
    return newdoc

async def decrease_item(item_id):
    collection=database["order_list"]
    doc=await collection.find_one({"item_id":item_id})
    quantity=doc["quantity"]

    if(quantity==0):
        return doc
    await collection.update_one({"item_id":item_id},{"$set":{"quantity":quantity-1}})
    newdoc=await collection.find_one({"item_id":item_id})
    return newdoc

    # await collection.update_one({"title": title}, {"$set": {"description": desc}})
    # document = await collection.find_one({"title": title})
    # return document

async def sample(item_id):
    collection=database["order_list"]
    doc=await collection.find_one({"item_id":item_id})
    return doc["quantity"]

async def all_order():
    allorder=[]
    collection=database["order_list"]
    cursor = collection.find({})
    async for document in cursor:
        allorder.append(Item(**document))
    return allorder


    