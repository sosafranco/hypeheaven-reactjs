import React from 'react';
import NavBar from './NavBar';
import Carrito from './Carrito';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='logo-title'>HypeHeaven</h1>
            </Link>
            <NavBar />
            <Carrito numerito={props.numerito} />
        </header>
    );
};

export default Header;
