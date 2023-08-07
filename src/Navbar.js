import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
<>
<div className="container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Earliy</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/education">Education</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/poltical">Poltical</NavLink>
        </li>
 <li className="nav-item">
          <NavLink className="nav-link" to="/poonapact">Poonapact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>
</>
  );
}

export default Navbar;

