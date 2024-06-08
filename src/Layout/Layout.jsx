import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'

function Layout() {
  return (
    <div>
       
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout