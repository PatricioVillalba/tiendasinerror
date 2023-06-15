import React, { useEffect, useState } from "react";
import axios from "axios";

import CardProducto from "../CardProducto/CardProducto";
import { Link } from "react-router-dom";

const ProductosList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <div className="">
      <h1>Listado Productos</h1>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-4 mt-3">
            <Link to={`/detail/${producto.id}`} className="text-decoration-none btn-unstyled">
            <CardProducto producto={producto} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductosList;
