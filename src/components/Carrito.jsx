import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

    return (
        <div>
            {carrito.map((product) => (
                <>
                    <div>
                        <h1 className='producto-agregado'>
                            {product.titulo}: ${product.precio}
                        </h1>
                    </div>
                </>
            ))}
            {carrito.length > 0 ? (
                <>
                    <h2 className='carrito-total'>Total: ${calcularTotal()}</h2>
                    <button className='vaciar-carrito' onClick={vaciarCarrito}>Vaciar carrito</button>
                </>
            ) : (
                <h2 className='main-title'>Your cart it's empty!</h2>
            )}
        </div>
    );
};

export default Carrito;
