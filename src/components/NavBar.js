import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Welcome</NavLink>
      <NavLink to="/FlashCards">Cards</NavLink>
      <NavLink to="/CreateCard">Create Card</NavLink>
    </div>
  );
};

export default NavBar;