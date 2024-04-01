import React from 'react'
// import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx';
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import {Toaster} from 'react-hot-toast';
function Layout() {
  return (
    <>
    <Toaster position='bottom-right' toastOptions={{duration :2000}} />
    <Header />
    <Outlet /> 
    <Footer />
  </>
  )
}

export default Layout