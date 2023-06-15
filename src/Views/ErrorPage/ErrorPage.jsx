import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h1 className="text-center">¡Bienvenido!</h1>
          <p className="text-center">Gracias por visitar nuestro sitio.</p>
          <p className="text-center">
            Estamos aquí para ayudarte en lo que necesites.
          </p>
          <div className="text-center">
            {/* <a href="#" className="btn btn-primary">
              Empezar
            </a> */}
            <Link  className="btn btn-primary" to="/">Volver al Inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
