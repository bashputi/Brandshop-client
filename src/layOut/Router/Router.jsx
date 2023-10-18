import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Pages/MainLayOut";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";


const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default myRouter;