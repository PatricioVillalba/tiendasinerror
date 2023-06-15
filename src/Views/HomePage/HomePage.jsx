import React from "react";
import { Link } from "react-router-dom";

import ProductosList from "../../components/ProductosList/ProductosList";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12">
          <h1 className="text-center">¡Bienvenido!</h1>
          <p className="text-center">Gracias por visitar nuestro sitio.</p>
          <div className="text-center">
            <ProductosList/>
            {/* <Link to="/">I</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
