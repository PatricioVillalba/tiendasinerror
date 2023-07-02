import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
// COMPONENTES
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Views
import AboutPage from "./Views/AboutPage/AboutPage";
import HomePage from "./Views/HomePage/HomePage";
import ErrorPage from "./Views/ErrorPage/ErrorPage";
import DetailPage from "./Views/DetailPage/DetailPage";
import CategoriaPage from "./Views/CategoriaPage/CategoriaPage";
import ProductosCategoriaPage from "./Views/ProductosCategoriaPage/ProductosCategoriaPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/CategoriaPage" element={<CategoriaPage />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route
              path="/productoscategoria/:nombre"
              element={<ProductosCategoriaPage />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
