import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { Badge, IconButton} from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img from "./carrito.png";

const CartWidget = (props) => {
  return (
    <div>
      <IconButton aria-label="Carrito de compras">  
        <Badge badgeContent={
            props.numero
        } color="secondary"> 
          {/* <ShoppingCartIcon style={{ color: 'white' }}/> */}
          <img src={img} alt="carrito" style={{ width: '30px', height: 'auto' }} />
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
