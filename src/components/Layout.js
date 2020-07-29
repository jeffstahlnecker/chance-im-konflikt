import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Globals from '../components/GlobalStyles'

const Layout = (children) => {
    return (
        <div>
            <Globals />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
