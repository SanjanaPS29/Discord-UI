import React from 'react'
import {DashboardHomeStyle} from './DashboardHome.style';
import  NooneAround from '../../../../assets/image-dashboard/noonearound.PNG'

 function DashboardHome() {
  return (
    <DashboardHomeStyle>
         <img src={NooneAround} width="100%" alt="No one around"/>
    </DashboardHomeStyle>
  )
}


export default DashboardHome;