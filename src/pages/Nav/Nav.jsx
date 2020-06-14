import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import './nav.css';

const activeStyle = { color: 'red', fontWeight: 'bold' };
const Nav = () => (
  <ul className='navBar'>
    <li className='navBarItem'>
      <NavLink activeStyle={activeStyle} exact to="/">
        homepage
      </NavLink>
    </li>
    <li className='navBarItem'>
      <NavLink activeStyle={activeStyle} to="/movies">
        moviesPage
      </NavLink>
    </li>
  </ul>
);
export default withRouter(Nav);
