import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './component'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
