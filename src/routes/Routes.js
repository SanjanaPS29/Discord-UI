import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";

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

]