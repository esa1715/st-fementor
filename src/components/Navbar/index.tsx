import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" className="link-img">
          <img src="assets/navbar/logo.svg" alt="Logo" />
        </NavLink>
        <img src="/assets/navbar/line.png" alt="Line" />
      </div>
      <ul className="navigation">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <NavLink to="/" className="link-number">00</NavLink>
          <NavLink to="/" className="link-page">HOME</NavLink>
        </li>
        <li className={location.pathname === '/destination' ? 'active' : ''}>
          <NavLink to="/destination" className="link-number">01</NavLink>
          <NavLink to="/destination" className="link-page">DESTINATION</NavLink>
        </li>
        <li className={location.pathname === '/crew' ? 'active' : ''}>
          <NavLink to="/crew" className="link-number">02</NavLink>
          <NavLink to="/crew" className="link-page">CREW</NavLink>
        </li>
        <li className={location.pathname === '/tech' ? 'active' : ''}>
          <NavLink to="/tech" className="link-number">03</NavLink>
          <NavLink to="/tech" className="link-page">TECHNOLOGY</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
