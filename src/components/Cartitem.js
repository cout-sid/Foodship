import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";



function Cartitem(props){
    const deleteCartitem=(item_id)=>{
        axios.delete(`https://foodship.onrender.com/${item_id}`)
            .then(res=>console.log(res.data))
    }

    // const [data, setData] = useState()
    
    // const {data}=props.item;

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/displaymylist')
    //       .then(res => {
    //         setCart(res.data)
    //       })
    //   });

    // useEffect(() => {
    //     // This effect uses the `value` variable,
    //     // so it "depends on" `value`.
    //     setData(props.data);
    //   }, [props.data])

    return(
        <Box
        sx={{
            // display: "flex",
            // flexDirection: "row",
            // p: 1,
            // m: 1,
            bgcolor: "#c7af6b",
            borderRadius: 1,
          }}>
            <div>{props.data && props.data.item_id}</div>
            <div>{ props.data && props.data.item_name}</div>
            {props.data && <button onClick={() => deleteCartitem(props.data.item_id)} >delete</button>}
            
        </Box>
    )
        

}

export default Cartitem



