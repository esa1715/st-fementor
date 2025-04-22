import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo'>
        <NavLink to="/" className="link-img"><img src="assets/navbar/logo.svg" alt=''/></NavLink>
        <img src="/assets/navbar/line.png" alt="" />
      </div>
      <ul className='navigation'>
        <li className={window.location.pathname === '/' ? 'active' : ''}>
          <NavLink to="/" className="link-number">00</NavLink>
          <NavLink to="/" className="link-page">HOME</NavLink>
        </li>
        <li className={window.location.pathname === '/destination' ? 'active' : ''}>
          <NavLink to="/destination" className="link-number">01</NavLink>
          <NavLink to="/destination" className="link-page">DESTINATION</NavLink>
        </li>
        <li className={window.location.pathname === '/crew' ? 'active' : ''}>
          <NavLink to="/crew" className="link-number">02</NavLink>
          <NavLink to="/crew" className="link-page">CREW</NavLink>
        </li>
        <li className={window.location.pathname === '/technology' ? 'active' : ''}>
          <NavLink to="/tech" className="link-number">03</NavLink>
          <NavLink to="/tech" className="link-page">TECHNOLOGY</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
