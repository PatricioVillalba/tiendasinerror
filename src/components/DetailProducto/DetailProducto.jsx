import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const DetailProducto = ({ producto }) => {
  return (
    <div className="container">
      <div className="card text-center">
          <div className="card-body">
        <img
          src={producto.image}
          className="card-img-top"
          alt="Imagen del producto"
          style={{ width: "200px", height: "auto" }}
        />
          <h2 className="card-title">{producto.title}</h2>
          <p className="card-text">{producto.description}</p>
          <h5 className="card-text">${producto.price}</h5>
          <Link to={`/productoscategoria/${producto.category}`}>
          <span className="badge bg-secondary">Categoria: {producto.category}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailProducto;
