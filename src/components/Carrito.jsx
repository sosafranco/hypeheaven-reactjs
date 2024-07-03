import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } =
        useContext(CartContext);

    return (
        <div>
            {carrito.map((product) => (
                <>
                    <div>
                        <h1 className='producto-agregado'>
                            {product.titulo}: ${product.precio}
                        </h1>
                        <button
                            onClick={() => {
                                eliminarProducto(product);
                            }}
                        >
                            X
                        </button>
                    </div>
                </>
            ))}
            {carrito.length > 0 ? (
                <>
                    <h2 className='carrito-total'>Total: ${calcularTotal()}</h2>
                    <button className='vaciar-carrito' onClick={vaciarCarrito}>
                        Vaciar carrito
                    </button>
                    <Link className='finalzar-compra' to='/finalizar-compra'>Finalizar compra</Link>
                </>
            ) : (
                <h2 className='main-title'>Your cart it's empty!</h2>
            )}
        </div>
    );
};

export default Carrito;
