import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UserProfileDiv from './components/EditProfile'
import DashboardLayout from '../Dashboard/DashboardLayout'
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <UserProfileDiv/>
      <DashboardLayout/>
      <Footer/>
    </div>
  )
}
export default Layout