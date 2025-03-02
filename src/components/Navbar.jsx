import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <Link activeClass="active" to="home" spy smooth offset={-70} duration={500}>
          Home
        </Link>
      </li>
      <li className="navbar-item">
        <Link activeClass="active" to="experience" spy smooth offset={-70} duration={500}>
          Experience
        </Link>
      </li>
      <li className="navbar-item">
        <Link activeClass="active" to="projects" spy smooth offset={-70} duration={500}>
          Projects
        </Link>
      </li>
      <li className="navbar-item">
        <Link activeClass="active" to="contacts" spy smooth offset={-70} duration={500}>
          Contacts
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
