// import * as React from 'react';
import Box from "@mui/material/Box";
import axios from "axios";
import React from "react";

// import PropTypes from 'prop-types';
import { withStyles } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const styles = {
//     card: {
//       minWidth: 275,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   };

  
function Onedetail(props){
    
    const addCartitem = () => {
        axios.post("https://foodship.onrender.com/post", { "price": props.data.price, "quantity": props.data.quantity,
         "item_id": props.data.item_id, 'item_name':props.data.item_name,"rest_name":props.data.rest_name})
          .then(res => console.log(res))
    }
    
    return(
        <div>
        
        {
            (props.check===props.data.rest_name) &&
            <Box sx={{display:"flex",
            flexDirection:"row",
            bgcolor:"#f75990",
            m: 5,
            p: 3}}>
            <Card>
            <CardContent>
            <Typography>{props.data.item_name}</Typography>
            <Typography>COST:{props.data.price}</Typography>
            <Typography>QUANTITY:{props.data.quantity}</Typography>
            {/* <Typography>{props.data.rest_name}</Typography> */}
            {/* <Typography>{props.data.item_id}</Typography> */}
            <CardActions>
            <Button onClick={addCartitem}>
                Add Item
            </Button>
            </CardActions>
            
            </CardContent>
            </Card>
            </Box>
        }
        </div>
        
    )
}


// export default withStyles(styles)(Onedetail)  ;
export default Onedetail;





