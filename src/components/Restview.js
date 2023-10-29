import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Restcard from "./Resturant" ;



function Restview(props){

    
    return(
        <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: 'space-around',
          p: 1,
          m: 1,
          // bgcolor: "background.paper",
          // maxWidth: 300,
          borderRadius: 1,
        }}
      >
        {props.restlist.map((rest) => (<Restcard name={rest.brand} />))}
      </Box>
    )
} 


export default Restview