import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (product) => {
        setCarrito([...carrito, product]);
    };

    const calcularCantidad = () => {
        return carrito.length;
    };

    const calcularTotal = () => {
        return carrito.reduce((acc, product) => acc + product.precio, 0);
    };

    // const calcularTotal = () => {
    //     const total = carrito.reduce((acc, product) => acc + product.precio, 0);
    //     return total.toFixed(2);
    // };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                calcularCantidad,
                calcularTotal,
                vaciarCarrito,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
