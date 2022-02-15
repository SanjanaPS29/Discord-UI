import React from 'react'
import { Link } from 'react-router-dom';
import {HeaderStyle,Button,ListStyle} from './Header.style'

 function Header() {
  return (
    <HeaderStyle>
   <ListStyle color={"#fff"}><Link to="/friends">Icon Friends</Link></ListStyle>
   <ListStyle color={"#fff"}><Link to="/friends">OnlineD</Link></ListStyle>
   <ListStyle color={"#8e9297"}><Link to="/all">All</Link></ListStyle>
   <ListStyle color={"#8e9297"}><Link to="/pending">Pending</Link></ListStyle>
   <ListStyle color={"#8e9297"}><Link to="/blocked">Blocked</Link></ListStyle>
   <ListStyle> <Button color={"#fff"}><Link to="/addFriend">Add Friend</Link></Button></ListStyle>
   <ListStyle> <Button color={"Blue"}>LogOut</Button></ListStyle>

    </HeaderStyle>
  )
}


export default Header;