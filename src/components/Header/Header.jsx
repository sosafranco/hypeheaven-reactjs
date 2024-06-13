import React from 'react';
import NavBar from './NavBar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='logo-title'>HypeHeaven</h1>
            </Link>
            <NavBar />
            <CartWidget />
        </header>
    );
};

export default Header;
