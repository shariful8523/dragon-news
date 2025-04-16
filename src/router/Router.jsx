
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import MainContent from "../components/Layout-Components/MainContent";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01" />,
      },
      {
        path: "category/:id",
        element: <MainContent />,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],

  },
  {
    path:"auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path:"/auth/login",
            element:  <Login></Login>,
        },
        {
            path:"/auth/register",
            element: <Register></Register>,
        },
        
    ]
  },
  {
    path:"/about",
    element: <h1>about</h1>
  },
  {
    path:"/career",
    element:<h1>career</h1>
  }
]);

export default Router;
