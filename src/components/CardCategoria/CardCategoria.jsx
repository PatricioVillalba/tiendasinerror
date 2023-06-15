import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

const CardCategoria = ({categoria}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {categoria}
          </Typography>
          <span className='badge bg-dark'>Click para ver mas productos de esta categoria</span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardCategoria;
