import React from "react";
import { Link } from "react-router-dom";
import {Nav} from './NavBar.styled';

const NavBar = () => {
  return (
    <>
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/repair">Ремонт</Link></li>
        </ul>
      </Nav>
    </>
  );
};

export default NavBar;