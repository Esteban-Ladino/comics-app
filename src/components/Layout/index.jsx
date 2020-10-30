import React from 'react'
import { GlobalStyles } from '../../assets/styles/GlobalStyles'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <GlobalStyles />
      {children}
      <Footer />
    </>
  )
}

export default Layout
