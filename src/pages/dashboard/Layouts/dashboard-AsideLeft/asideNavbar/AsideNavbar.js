import React from 'react'
import {AsideNavbarStyle,ListStyle} from './AsideNavbar.style'
import {FaDiscord,FaCompass} from 'react-icons/fa';
import {AiOutlineDownload,AiOutlinePlusCircle,AiFillPlusCircle,BsFillPlusSquareFill} from 'react-icons/ai';
import {IoMdCompass} from 'react-icons/io';
import {FiDownload} from 'react-icons/fi';
import newLine from '../../../../../assets/image-dashboard/newLine.PNG'
import discord from '../../../../../assets/image-dashboard/discord.svg';

function AsideNavbar() {
  return (
    <AsideNavbarStyle>
    <ListStyle><img src={discord} alt="discord" width="100%"/></ListStyle>
   <ListStyle><img src={newLine} width="100%" alt="slash n icon"/></ListStyle>
   <ListStyle><AiOutlinePlusCircle size={45}/></ListStyle>
   <ListStyle><IoMdCompass size={45}/></ListStyle>
   <ListStyle><FiDownload size={45}/></ListStyle>
    </AsideNavbarStyle>
  )
}


export default AsideNavbar;