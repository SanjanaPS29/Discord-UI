import React from 'react'
import {DashboardHomeStyle,Content} from './DashboardHome.style';
import  NooneAround from '../../../../assets/image-dashboard/no_online_friends.svg'

 function DashboardHome() {
  return (
    <DashboardHomeStyle>
    <Content>
         <img src={NooneAround}  width="50%" alt="No one around"/>
         <p>No one's around to play with Wumpus.</p>
    </Content>

    </DashboardHomeStyle>
  )
}


export default DashboardHome;