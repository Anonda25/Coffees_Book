import React from 'react'
import Navber from '../Components/Navber'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <Navber></Navber>
      <div className='min-h-[calc(100vh-232px)] container mx-auto px-12 py-12'>
        <Outlet></Outlet>
      </div>
    <Footer></Footer>
    </div>
  )
}

export default MainLayout