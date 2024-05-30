import React from 'react'
import NavBar from './NavBar'
import Carrito from './Carrito'

const Header = (props) => {
    return (
        <header className='header'>
            <h1 className='logo-title'>HypeHeaven</h1>
            <NavBar />
            <Carrito numerito={props.numerito} />
        </header>
    )
}

export default Header
