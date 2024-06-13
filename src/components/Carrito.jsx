import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const { carrito } = useContext(CartContext);

    return (
        <div>
            {carrito.map((prod) => <h1>{prod.nombre}</h1>)}
        </div>
    )
}

export default Carrito
