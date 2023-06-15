import React, { useEffect, useState } from "react";
import axios from "axios";

import CardCategoria from "../CardCategoria/CardCategoria";
import { Link } from "react-router-dom";

const CategoriaList = () => {
  const [categorias, setCategoria] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories/")
      .then((response) => {
        setCategoria(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorias:", error);
      });
  }, []);

  return (
    <div className="">
      <h1>Listado Categorias</h1>
      <div className="row">
        {categorias.map((categoria) => (
          <div key={categoria} className="col-4 mt-3">
            <Link to={`/productoscategoria/${categoria}`} className="text-decoration-none btn-unstyled">
            <CardCategoria categoria={categoria} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriaList;
