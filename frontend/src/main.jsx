import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import Layout from './Layout.jsx'


const router =createBrowserRouter([
  {
    path:"/",
    element : <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "Login",
        element : <Login />

      },
      {
        path: "Signup",
        element : <Signup />

      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
