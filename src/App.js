import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Header from './component/Header'
import Marquee from './component/Marque'
import LoginForm from './component/LoginForm'
import AdminDashBoard from './adminDashBoard/AdminDashBoard'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>

      <BrowserRouter>
      <Header />
      <Marquee />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/userLogin" element={<LoginForm />} />
          <Route path="/adminDashBoard" element={<AdminDashBoard />} />
        </Routes>
      </BrowserRouter>

        <Footer/>
    </>
  )
}

export default App