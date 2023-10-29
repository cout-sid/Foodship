import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

// import axios from 'axios';

function Restcard(props){

    return (
      <div className="rest_card">
        <Card sx={{ minWidth: 350,
      m:10}}>
          <CardMedia
            component="img"
            alt="resturant_name"
            height="200"
            image={require("./static/" + props.name + ".jpg")}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The hotel name is {"./static/" + props.name + ".jpg"}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to ={`/resturant/${props.name}`}>
              <Button size="small">Visit</Button>
              
            </Link>
          </CardActions>
        </Card>
        </div>
      );


}

export default Restcard








