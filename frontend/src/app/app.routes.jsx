import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register";
import Home from "../features/Home/Page/Home"
import Loader from "../global/component/Loader"
import Protected from '../features/auth/components/Protected';
import ErrorPage from "../global/component/ErrorPage";
import About from "../features/Home/Page/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected>
      <Home></Home>
    </Protected>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Loading",
    element: <Loader></Loader>,
  },
  {
    path:"/home",
    element:<Protected>
      <Home></Home>
    </Protected>
  },
  {
    path:"/About",
    element:<About></About>
  },
  {
    path:"*",
    element: <ErrorPage></ErrorPage>
  }
]);