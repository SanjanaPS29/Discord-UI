import React from 'react'
import AsideConversation from './Layouts/dashboard-AsideLeft/asideConversation/AsideConversation';
import AsideNavbar from './Layouts/dashboard-AsideLeft/asideNavbar/AsideNavbar';
import ActiveNow from './Layouts/dashboard-AsideRight/activeNow/ActiveNow';
import Header from './Layouts/dashboard-Header/Header';
import {DashboardStyle,MainContainer,MainContent} from './Dashboard.style'
import DashboardHome from './pages/DashboardHome/DashboardHome';
import  NooneAround from '../../assets/image-dashboard/noonearound.PNG'

 function Dashboard() {
  return (
    (
    <DashboardStyle>
      <AsideNavbar/>
      <AsideConversation/>
      <MainContainer>
      <Header/>
      <MainContent>
        <DashboardHome/>
        <ActiveNow/>
      </MainContent>
        </MainContainer> 
    </DashboardStyle>
    )
  )
}


export default Dashboard;