import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './component'
import Footer from './component/Footer'
import { AuthProider } from './context/AuthContext'

const App = () => {
  return (
    <AuthProider>
      <Header />
      <Outlet />
      <Footer />
    </AuthProider>
  )
}

export default App
