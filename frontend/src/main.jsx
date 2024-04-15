import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import Layout from './Layout.jsx'
import PropertyForm from './components/AddProp/PropertyForm.jsx'
import { UserContextProvider } from '../context/userContext.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Map from './components/Map/Map.jsx'
import Login1 from './components/Login/Login1.jsx'
import Card from './components/Cards/Card.jsx'
import HouseForm from './components/HouseForm/HouseForm.jsx'
import PropertyDetails from './components/PropertyDetails/PropertyDetails.jsx'
import RoomMate from './components/RoomMate/RoomMate.jsx'
import Nearest from './components/Nearest/Nearest.jsx'
// import Find from './components/RoomMate/Find.jsx'
import List from './components/RoomMate/List.jsx'
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
        element : <Login1 />

      },
      {
        path: "Signup",
        element : <Signup />

      },
      {
        path: "Dashboard",
        element : <Dashboard />

      },
      {
        path: "PropertyForm",
        element : <PropertyForm />
      },
      {
        path: "Map",
        element : <Map />
      },{
        path: "HouseForm",
        element : <HouseForm />
      },
      {
        path: "PropertyDetails",
        element : <PropertyDetails />
      },{
        path: "RoomMate",
        element : <RoomMate />
      },
      {
        path: "Nearest",
        element : <Nearest />
      },
      // {
      //   path: "Find",
      //   element : <Find />
      // },
      {
        path: "List",
        element : <List />
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode></UserContextProvider>
)
