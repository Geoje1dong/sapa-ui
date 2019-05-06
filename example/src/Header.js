import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer } from 'sapa-ui/dist/index';

const Header = props => (
  <NavContainer>
    <div className="sapa-header__logo">
      <Link to="/">LOGO</Link>
    </div>
    <div className="sapa-header__menu">
      <div><Link to="/button">BUTTON</Link></div>
      <div><Link to="/card">CARD</Link></div>
      <div><Link to="/layout">LAYOUT</Link></div>
      <div><Link to="/modal">MODAL</Link></div>
      <div><Link to="/typography">TYPOGRAPHY</Link></div>
    </div>
    <div className="sapa-header__logo"></div>
  </NavContainer>
)

export default Header