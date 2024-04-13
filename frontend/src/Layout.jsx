import React from 'react'
// import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx';
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import {Toaster} from 'react-hot-toast';
import NewNavbar from './components/Navbar/NewNavbar.jsx';
function Layout() {
  return (
    <>
    <Toaster position='bottom-right' toastOptions={{duration :2000}} />
    <NewNavbar/>
    <Outlet /> 
    <Footer />
  </>
  )
}

export default Layout