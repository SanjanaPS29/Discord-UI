import React from 'react'
import {HeaderStyle,Button,ListStyle} from './Header.style'

 function Header() {
  return (
    <HeaderStyle>
   <ListStyle color={"#fff"}>Icon Friends</ListStyle>
   <ListStyle color={"#fff"}>Online</ListStyle>
   <ListStyle color={"#8e9297"}>All</ListStyle>
   <ListStyle color={"#8e9297"}>Pending</ListStyle>
   <ListStyle color={"#8e9297"}>Blocked</ListStyle>
   <ListStyle> <Button color={"#fff"}>Add Friend</Button></ListStyle>
    </HeaderStyle>
  )
}


export default Header;