import React from 'react';
import { Link } from 'react-router-dom';
import {
  FlexContainer,
  NavContainer,
} from 'sapa-ui/dist/index';

const HomePage = () => (
  <FlexContainer>
    <NavContainer>
      <div className="sapa-header__logo">
        <Link to="/">LOGO</Link>
      </div>
      <div className="sapa-header__menu">
        <div><Link to="/button">BUTTON</Link></div>
        <div><Link to="/">MENU</Link></div>
        <div><Link to="/">MENU</Link></div>
        <div><Link to="/">MENU</Link></div>
        <div><Link to="/">MENU</Link></div>
      </div>
      <div className="sapa-header__logo"></div>
    </NavContainer>
    <div>
      <h1>사파 유저 인터페이스</h1>
      제작자 : Geoje1dong
    </div>
  </FlexContainer>
)

export default HomePage