import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

const CardProducto = ({producto}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="800"
          image={producto.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${producto.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardProducto;
