import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import "../style/navbar.css";

const NavBar = () => {
  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <Link to="/" className="nav-link px-2 link-dark underline-on-hover">
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/trips"
          className="nav-link px-2 link-dark underline-on-hover"
        >
          Trips
        </Link>
      </li>

      

      {Auth.loggedIn() ? (
        <li>
          <Link
            to={`/users/${Auth.getUser()?.data?.username}`}
            className="nav-link px-2 link-dark underline-on-hover"
          >
            Trip Dashboard
          </Link>
        </li>
      ) : (
        <li>
          <Link
            to="/about"
            className="nav-link px-2 link-dark underline-on-hover"
          >
            About
          </Link>
        </li>
      )}
      <li>
        <Link
          to="/contact"
          className="nav-link px-2 link-dark underline-on-hover"
        >
          Contact
        </Link>
      </li>

      

      
    </ul>
  );
};

export default NavBar;
