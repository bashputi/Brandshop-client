import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Pages/MainLayOut";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Register from "../../Components/Register";
import Login from "../../Components/Login";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AddProduct from "../Pages/AddProduct";
import PrivateRoute from "../PrivateRoute";
import MyCart from "../Pages/MyCart";
import DisplayBrand from "../../server/displayBrand/DisplayBrand";
import Update from "../../server/Update";



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
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://brand-store-server-eksoft1p8-rimeislam672-gmailcom.vercel.app/carts')
            },
            {
                path: '/service',
                element: <DisplayBrand></DisplayBrand>,
                loader: () => fetch(`https://brand-store-server-eksoft1p8-rimeislam672-gmailcom.vercel.app/brands`)
            },
            {
                path: '/service/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://brand-store-server-eksoft1p8-rimeislam672-gmailcom.vercel.app/brands/${params.id}`)
            },
            {
                path: '/service/details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://brand-store-server-eksoft1p8-rimeislam672-gmailcom.vercel.app/brands/${params.id}`)
            }
        ]
    }
])

export default myRouter;