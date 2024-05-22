import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";


export const route = createBrowserRouter([
    {
        path:"/",
        element: <Layout></Layout>
    }
])