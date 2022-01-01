import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Header from './Header' 
import Footer from './Footer'
import Routers from '../routes/Routers'
import ProductViewModal from './ProductViewModal'

const Layout = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="container">
                <div className="main">
                    <Routers />
                </div>
            </div>
            <Footer />
            <ProductViewModal />
		</BrowserRouter>
    )
}

export default Layout
