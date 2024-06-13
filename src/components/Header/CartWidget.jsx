import React from 'react';
import { useContext } from 'react';
import { BagFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { calcularCantidad } = useContext(CartContext)

    return (
        <Link className='cart' to='/carrito'>
            <BagFill color='black' size={22}></BagFill> {calcularCantidad()}
        </Link>
    );
};

export default CartWidget;
