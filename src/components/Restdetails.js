import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Onedetail from "./Onedetail";
// import axios from "axios";

// const allrest={
//     ChanduEatery:[{item_id:"1"},{item_id:"2"}],
//     Kingdhaba:[{item_id:"3"},{item_id:"4"}],
//     MelodyHotel:[{item_id:"5"},{item_id:"6"}],
//     Swaadnusar:[{item_id:"7"},{item_id:"8"}]
// }

const allitems = [
    {
        item_name: "Mango_lassi",
        price: 10,
        quantity: 1,
        rest_name: "ChanduEatery",
        item_id: 1
        },
    {
            item_name: "chole_bhature",
            price: 50,
            quantity: 2,
            rest_name: "ChanduEatery",
            item_id: 2
        },
    {
        item_name: "shahi_paneer",
        price: 250,
        quantity: 1,
        rest_name: "Kingdhaba",
        item_id: 3
        },
    {
            item_name: "Paneer_naan",
            price: 60,
            quantity: 1,
            rest_name: "Kingdhaba",
            item_id: 4
        },
    {
        item_name: "Risotto",
        price: 500,
        quantity: 1,
        rest_name: "MelodyHotel",
        item_id: 5,
        },
    {
        item_name: "kebab",
        price: 400,
        quantity: 5,
        rest_name: "MelodyHotel",
        item_id: 6,
        },
    {
        item_name: "Chicken_Delta",
        price: 100,
        quantity: 1,
        rest_name: "Swaadnusar",
        item_id: 7
        },
    {
        item_name: "aloo_paratha",
        price: 20,
        quantity: 1,
        rest_name: "Swaadnusar",
        item_id: 8
        }

    ];



function Restdetails(props){
    // const{rest_name}=useParams();
    const {rest_name}=useParams();
    // rest_name=props.rest_name
    // const {elements}=allrest[props.rest_name]

    

    return(

        <div className="rest_details">

        <Box
        sx={{display:"flex",
        flexDirection:"row",
        
        m: 0,
        p: 0}}
        >
            {/* elements=allrest[{props.rest_name}] */}
            {/* `${props.rest_name}` */}
            
            {allitems.map((ele) => (<Onedetail data={ele} check={rest_name}/>) )   }
        </Box>
        </div>
    )

}

export default Restdetails

// useEffect(() => {
//     // This effect uses the `value` variable,
//     // so it "depends on" `value`.
//     console.log(value);
//   }, [value])