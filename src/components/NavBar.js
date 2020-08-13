import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink activeStyle={{
      fontWeight: "Blue",
      color: "Blue"
      }}
      to="/">Home </NavLink>
      <NavLink activeStyle={{
      fontWeight: "Blue",
      color: "Blue"
      }}
      to="/CreateCard">Create Card</NavLink>
    </div>
  );
};

export default NavBar;