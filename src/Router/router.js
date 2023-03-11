import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
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
