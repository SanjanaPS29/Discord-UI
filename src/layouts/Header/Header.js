import React from 'react';
import { Link } from 'react-router-dom';
import {HeaderStyle,ButtonStyle,IconStyle} from './Header.style';
import Navbar from './Navbar/Navbar';
import discord1 from '../../assets/dis.jfif';

 function Header() {
  return (
  <HeaderStyle>
    <IconStyle><img src={discord1} width="30%" alt="discord icon" /></IconStyle>
    {/* /div><Discord>Discord</Discord> */}
    <Navbar></Navbar>
    <Link to="/login"><ButtonStyle>Login</ButtonStyle></Link>
  </HeaderStyle>
  );
}

export default Header;