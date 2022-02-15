import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import AddFriend from "../pages/dashboard/pages/addFriend/AddFriend";
import DashboardHome from "../pages/dashboard/pages/DashboardHome/DashboardHome";
import AsideNavbar from "../pages/dashboard/Layouts/dashboard-AsideLeft/asideNavbar/AsideNavbar";
import AsideConversation from "../pages/dashboard/Layouts/dashboard-AsideLeft/asideConversation/AsideConversation";
import Header  from "../pages/dashboard/Layouts/dashboard-Header/Header";
import ActiveNow from "../pages/dashboard/Layouts/dashboard-AsideRight/activeNow/ActiveNow";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Redirect,
    Link,
  } from "react-router-dom";


export const UnauthenticatedRoutes=() =>{
    return(
     <Router>  

         
             {/* <Link to='/login'>Login</Link> */}
             <Routes>
                {
                routes?.map(({ path, element }) => (
                  <Route key={path} exact path={path} element={element} />
                ))
                // <Route  key={path}  path="/dashboard" element={<Dashboard />} />
               }

              </Routes>
     </Router>

    )
}

export const AuthenticatedRoutes=()=>{

    return (

        <Router>
             <Header/>
         {/* <AsideNavbar/> */}
        {/* <AsideConversation/> */}
        {/* <ActiveNow/> */}
            {/* <Link to='/dashboard'>Dashboard</Link> */}
<Routes>
              {
              dashboardRoutes?.map(({ path, element }) => (
                <Route key={path} exact path={path} element={element} />
              ))}

              </Routes>
        </Router>
    )
}


export const routes=
[
{
path:'/',
element:<Home/>
},
{
path:'/login',
element:<Login/>
},
{
    path:'/register',
    element:<Register/>
},
// {
//     path:'/addFriend',
//     element:<AddFriend/>
// },
// {
//     path:'/blocked',
//     element:<AddFriend/>
// },
// {
//     path:'/pending',
//     element:<AddFriend/>
// },
// {
//     path:'/all',
//     element:<AddFriend/>
// },
]

export const dashboardRoutes=[
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/addFriend',
        element:<AddFriend/>
    },
    {
        path:'/blocked',
        element:<AddFriend/>
    },
    {
        path:'/pending',
        element:<AddFriend/>
    },
    {
        path:'/all',
        element:<AddFriend/>
    },
]