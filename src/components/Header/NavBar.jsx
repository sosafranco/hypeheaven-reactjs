import React from 'react'
import Carrito from './Carrito'

const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-menu'>
                <li><a className='nav-link' href="#">All Products</a></li>
                <li><a className='nav-link' href="#">Tee's</a></li>
                <li><a className='nav-link' href="#">Sneakers</a></li>
                <li><a className='nav-link' href="#">Jackets</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
