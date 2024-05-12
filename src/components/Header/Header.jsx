import React from 'react'
import NavBar from './NavBar'
import Carrito from './Carrito'

const Header = () => {
    return (
        <header className='header'>
            <h1>iStore</h1>
            <NavBar />
            <Carrito />
        </header>
    )
}

export default Header
