import React from "react";
import logo from "./images/GenieCart_Teal.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light justify-content">
      <img src={logo} width="187" height="50" class="d-inline-block align-top" alt="GenieCart" />
      <form className="form-inline">
        <button className="btn btn-success mx-3 my-sm-0 " type="submit">Login</button>
        <button className="btn btn-outline-success my-sm-0" type="submit">Register</button>
      </form>
    </nav>
  );
};

export default Navbar;
