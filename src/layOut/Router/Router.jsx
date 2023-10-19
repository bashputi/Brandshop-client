import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Pages/MainLayOut";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Register from "../../Components/Register";
import Login from "../../Components/Login";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AddProduct from "../Pages/AddProduct";
import PrivateRoute from "../PrivateRoute";


const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brand.json')
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails> ,
                loader: () => fetch('/brand.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            }
        ]
    }
])

export default myRouter;