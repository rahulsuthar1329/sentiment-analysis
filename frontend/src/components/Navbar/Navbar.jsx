import React from "react";
import logo from "./images/GenieCart_Teal.png";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-light bg-light`}>
      <a className="navbar-brand" href="#">
        <img src={logo} width="187" height="50" className="d-inline-block align-top" alt="GenieCart" />
      </a>
      <ul className={`navbar-nav ms-auto d-flex`}>
        <li style={{display:"inline-block"}}>
          <button className={`btn btn-success mx-3 my-sm-0 `} type="submit">Login</button>
        </li>
        <li style={{display:"inline-block"}}>
          <button className={`btn btn-outline-success my-sm-0 `} type="submit">Register</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
