import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import AuthLayout from "../pages/AuthLayout";
import Home from "../pages/Home";
import ForgotPassword from "../pages/ForgetPassword";
import MyProfile from "../pages/MyProfile";
import ProtectedLayout from "../pages/ProtectedLayout";
import PrivateRoute from "../Component/PrivateRoute";
import SkillDetails from "../pages/SkillDetails";
import BookSession from "../pages/BookSession";
import ServiceLayout from "../pages/ServiceLayout";
import Services from "../pages/Services";
import UpdateProfile from "../pages/UpdateProfile";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/user",
    element: <ProtectedLayout></ProtectedLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/user/update",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/service",
    element: <ServiceLayout></ServiceLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/service/skill/:id",
        element: (
          <PrivateRoute>
            <SkillDetails></SkillDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/service/book-session",
        element: (
          <PrivateRoute>
            <BookSession></BookSession>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth",
        element: <LogIn></LogIn>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
]);
