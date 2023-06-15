import React from "react";
import { Link } from "react-router-dom";

import ProductosList from "../../components/ProductosList/ProductosList";
import CategoriaList from "../../components/CategoriasList/CategoriasList";

const CategoriaPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12">
          <h1>Categoria</h1>
          <div className="text-center">
          <CategoriaList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriaPage;