import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="collapse navbar-collapse col-4" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/reservation">
                Reservations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/contactus">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
