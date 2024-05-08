import React from 'react'
import Navbar from './Navbar'
import Manu from './Manu'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Manu/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
