import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import AddFriend from "../pages/dashboard/pages/addFriend/AddFriend";
import DashboardHome from "../pages/dashboard/pages/DashboardHome/DashboardHome";

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
{
    path:'/dashboard',
    element:<Dashboard/>
},
{
    path:'/addFriend',
    element:<AddFriend/>
}

]

export const dashboardRoutes=[
    {
        path:'/',
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