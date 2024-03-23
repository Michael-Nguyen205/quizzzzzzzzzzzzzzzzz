import React from 'react';
import LayoutDefault from "../Nav/Navdeffault";
import Home from "../PAGE/Home";
import Login from "../PAGE/Login";
import Logout from "../PAGE/Logout";
import Quiz from "../PAGE/Quiz";
import Topic from "../PAGE/Topic";
import Answesr from "../PAGE/Answesr";
import Result from "../PAGE/Result";
import Register from "../PAGE/Register";



// import AddProductForm from "../PAGE/Test"

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
      // element: <AddProductForm />,

    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/Logout",
        element: < Logout/>
      },
      {
        path: "/Topic",
        element: <Topic/>
      },


      {
        path: "/Register",
        element: < Register/>
      },
      {
        path: "/Quiz/:id",
        element: < Quiz/>
      },
      {
        path: "/Answesr",
        element: <Answesr/>
      },
      {
        path: "/Result/:id",
        element: <Result/>
      }
    ]
  }
];
