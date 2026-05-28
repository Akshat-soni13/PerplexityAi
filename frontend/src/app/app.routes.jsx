import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/Login"
import Register from "../features/auth/pages/Register";
import Home from "../features/Home/Page/Home"
import Loader from "../global/component/Loader"
import Protected from '../features/auth/components/Protected';


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
]);