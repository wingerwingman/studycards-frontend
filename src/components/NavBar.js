import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home </NavLink>
      <NavLink to="/CreateCard">Create Card</NavLink>
    </div>
  );
};

export default NavBar;