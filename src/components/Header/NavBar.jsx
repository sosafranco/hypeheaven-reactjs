import React from 'react'
import Carrito from './Carrito'

const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-menu'>
                <li><a className='nav-link' href="#">Store</a></li>
                <li><a className='nav-link' href="#">Mac</a></li>
                <li><a className='nav-link' href="#">iPhone</a></li>
                <li><a className='nav-link' href="#">iPad</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
