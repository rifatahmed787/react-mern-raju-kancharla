import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import MyTweet from "../pages/MyTweet/MyTweet";
import ForgotPass from "../pages/SignIn/ForgotPass";
import LogIn from "../pages/SignIn/LogIn";
import SignUp from "../pages/Signup/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mytweet",
        element: <MyTweet />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/forgotpass",
        element: <ForgotPass />,
      },
    ],
  },
]);
