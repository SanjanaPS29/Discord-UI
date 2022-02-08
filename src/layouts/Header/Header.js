import React from 'react';
import { Link } from 'react-router-dom';
import {HeaderStyle,ButtonStyle} from './Header.style';
import Navbar from './Navbar/Navbar';


 function Header() {
  return (
  <HeaderStyle>
    <div>Icon</div>
    <Navbar></Navbar>
    <Link to="/login"><ButtonStyle>Login</ButtonStyle></Link>
  </HeaderStyle>);
}

export default Header;