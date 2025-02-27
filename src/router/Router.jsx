import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRoute from "./PrivetRoute";
import ContactUs from "../pages/ContactUs";
import Details from "../pages/Details";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: ()=> fetch('/fakeData.json')
        },
        {
          path:"/:id",
          element:<PrivetRoute><Details></Details></PrivetRoute>,
          loader: ()=> fetch('/fakeData.json'),
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/register",
          element:<Register></Register>,
        },

        {
          path:"/update-profile",
          element:<PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>
        },
        {
          path:"/contact",
          element:<PrivetRoute><ContactUs></ContactUs></PrivetRoute>
        }
      ]
    },
  ])

  export default router;