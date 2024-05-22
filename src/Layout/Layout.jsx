import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'

function mainLayout() {
  return (
    <div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default mainLayout