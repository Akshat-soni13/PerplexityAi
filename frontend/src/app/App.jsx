import React from "react";
import { RouterProvider } from "react-router-dom";
import {router} from "../app/app.routes"
import { useAuth } from "../features/auth/hook/useAuth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const App = () => {

  const auth = useAuth()

  useEffect(()=>{

    auth.handleGetMe()

  },[])

  return <RouterProvider router={router} />;
};

export default App;