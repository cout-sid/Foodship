import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';


function Maincard(){
    const imgurl="https://i.pinimg.com/736x/ec/8c/7d/ec8c7de51511ff1a0e0c5c5efd9cb43f.jpg"
    return(
        <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${imgurl})`
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={"https://i.pinimg.com/736x/ec/8c/7d/ec8c7de51511ff1a0e0c5c5efd9cb43f.jpg"} alt={"Img_failed"} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      </Paper>
    )
} 


export default Maincard