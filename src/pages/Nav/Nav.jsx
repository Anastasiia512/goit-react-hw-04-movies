import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = { color: 'red', fontWeight: 'bold' };
const Nav = () => (
  <ul>
    <li>
      <NavLink activeStyle={activeStyle} exact to="/">
        homepage
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={activeStyle} to="/movies">
        moviesPage
      </NavLink>
    </li>
  </ul>
);
export default Nav;
