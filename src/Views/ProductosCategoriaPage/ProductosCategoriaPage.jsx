import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; 
// import CardProducto from "../CardProducto/CardProducto";
import CardProducto from "../../components/CardProducto/CardProducto";


import { Link } from "react-router-dom";

const ProductosCategoriaPage = () => {
  let {nombre} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/category/${nombre}`)
      .then((response) => {
        setProductos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, [nombre]);

  return (
    <div className="container">
      <h2 className="row justify-content-center mt-3">Listado por Categorias:{nombre}</h2>
     <div className="row justify-content-center mt-5">
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


export default ProductosCategoriaPage;
