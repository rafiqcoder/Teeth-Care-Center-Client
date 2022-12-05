import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Checkout from "../Pages/Checkout/Checkout";

import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyAppoints from "../Pages/Dashboard/MyAppoints/MyAppoints";
import UsersList from "../Pages/Dashboard/UsersList/UsersList";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Reviews from "../Pages/Reviews/Reviews";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',element: <Main></Main>,
        children: [
            {
                path: '/',element: <Home></Home>,
            },
            {
                path: '/About',element: <About></About>
            },
            {
                path: '/appointment',element: <Appointment />
            },

            {
                path: '/contact-us',element: <ContactUs />
            },

            {
                path: '/login',element: <Login />
            },
            {
                path: '/register',element: <Register></Register>
            },
            {
                path: '/reviews',element:
                    <Reviews></Reviews>
            },
            {
                path: '*',element: <NotFound />
            },
        ]
    },
    {
        path: '/',element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',element: <Dashboard />,
            },
            {
                path: '/users',element: <AdminRoutes><UsersList /></AdminRoutes>,
            },
            {
                path: '/checkout/:id',element: <Checkout></Checkout>,
                loader: ({ params }) => { return fetch(`https://teeth-cares-server.vercel.app/checkout/${params.id}`) },
            },
            {
                path: '/my-appoinments',element: <PrivateRoute><MyAppoints /></PrivateRoute>
            },
        ],
    },
    {
        path: '*',element: <NotFound />
    },
])


export default router;