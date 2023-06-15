import React from "react";
import img from "./logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
      <div className="col-12 text-center" style={{ background: 'linear-gradient(to right,orange, rgba(255, 255, 255, 0.9))' }}>
        <Link to="/">
      <img src={img} alt="logo" style={{ width: '100px', height: 'auto' }} />
      
        </Link>
      </div>
  );
};

export default Header;
