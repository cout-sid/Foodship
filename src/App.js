import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Restview from "./components/Restview";
import Maincard from "./components/Maincard";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Restdetails from "./components/Restdetails";
import Viewcart from "./components/Viewcart";



function App() {
  

  const restlist = [{brand:"ChanduEatery"}, {brand:"Kingdhaba"}, {brand:"MelodyHotel"}, {brand:"Swaadnusar"}];
  // const imgurl = "https://i.pinimg.com/736x/ec/8c/7d/ec8c7de51511ff1a0e0c5c5efd9cb43f.jpg";

  
  const ufc=294
  const [cart, setCart] = useState([{}])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/displaymylist')
      .then(res => {
        // console.log(res.data)
        setCart(res.data)
      })
      
  });

  
  return (
    <div className="App">
      <div className="main_card">
        <Maincard />
      </div>
      {/* <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      /> */}
      {/* <Box
      sx={{
        position: 'relative',
        backgroundColor: '#fff',
        // backgroundColor: 'red',
        // color: '#fff',
        mb: 4,
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${imgurl})`,
      }}
    >
      How are you?
    </Box> */}
      <Box
        sx={{
          // display: "flex",
          // flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        {/* <Box>jasdfljkdalfdsfkaj</Box> */}
        <div style={{ width: '100%' }}>
        <Box>
        {(ufc===294) && <img src={require("./components/static/foodship.jpg")} alt={"Img_failed"} />}
        {/* https://i.pinimg.com/736x/ec/8c/7d/ec8c7de51511ff1a0e0c5c5efd9cb43f.jpg" */}
        </Box>
        </div>

        <div style={{ width: '100%' }}>
        <Box
        sx={{display:"flex",
        flexDirection:"row",
        m: 0,
        p: 0}}
        >

        <Box
        sx={{bgcolor:'#f75990'}}
        >
          <div className="Routing">
          <Router>
          <Routes>
          <Route exact path="/" 
          element={<Box>
            {/* <div className="rest_list"> */}
              <Restview restlist={restlist} />
            {/* </div> */}
          </Box>}
          />
          <Route path="/resturant/:rest_name" element={<Restdetails/>}/> 
          </Routes>
        </Router>
          </div>
        </Box>
          
          
          

          <div className="mycart">
            <Box sx={{ width: 300 ,height : '100%',bgcolor:"#c7af6b",p: 0, m: 0}}>
            <div>YOUR CART</div>
            <Viewcart cart={cart}/>
            </Box>
          </div>

        </Box>

        </div>
        
      </Box>

      
            {/* style={{ display: 'none' }} */}

    </div>
  );
}

export default App;

