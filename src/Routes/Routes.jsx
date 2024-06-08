import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../Pages/HomePage/Homepage";
import AboutPage from "../Pages/AboutPage/AboutPage";


export const route = createBrowserRouter([
    {
        path:"/",
        element: <Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Homepage></Homepage>
            },
            {
                path:"/about",
                element:<AboutPage></AboutPage>
            }
        ]
    }
])