import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import categories from '../../data/categorias.json';

const NavBar = () => {

    console.log(categories)
    return (
        <nav className='nav'>
            <ul className='nav-menu'>
                <li>
                    <NavLink to='/' activeclassname='active' className='nav-link'>Home</NavLink>
                </li>
                {
                    categories.map((category) => {
                        return (
                            <li className='nav-item'>
                                <NavLink to={`/category/${category.id}`} activeclassname="active" className='nav-link'>{category.nombre}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar
