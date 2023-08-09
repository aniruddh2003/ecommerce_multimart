import React from 'react'
import Header from '../Header/Header'
import Router from '../../routers/Router'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Router />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
