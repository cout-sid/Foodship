from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import post_item,remove_item,sample,all_order,Item


app=FastAPI()

origins = [
    "http://localhost:3000",
    # "https://foodship.onrender.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def display():
    return {"Bhupendra Jogi"}
# http://127.0.0.1:8000/

@app.post("/post",response_model=Item)
async def post(item:Item):
    response=await post_item(item.dict())
    if response:
        return response
    raise HTTPException(400,"something went wrong")


# @app.delete("/{rest_name}/{item_id}")
# async def delete_item(rest_name:str , item_id:int):
#     response=await remove_item(rest_name,item_id)
#     if response:
#         return "Successfully deleted item from your cart"
#     raise HTTPException(404, f"There is item or resturant  with the name {rest_name} and item_id {item_id}")

@app.delete("/{item_id}")
async def delete_item(item_id:int):
    response=await remove_item(item_id)
    if response:
        return "Successfully deleted item from your cart"
    raise HTTPException(404, f"There is no item  with the item_id {item_id}")


@app.get("/quantity/{item_id}")
async def get_quant(item_id:int):
    response = await sample(item_id)
    if response:
        return {f"The quantity of the desired item with id={item_id} is {response}"}
    raise HTTPException(404,f"no item found with item_id {item_id}")

@app.get("/displaymylist")
async def display_mylist():
    response=await all_order()
    return response

    