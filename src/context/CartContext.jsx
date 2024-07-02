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
        return carrito
            .reduce((acc, product) => acc + product.precio, 0)
            .toFixed(2);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const eliminarProducto = (product) => {
        const productoEncontrado = carrito.find(
            (prod) => prod.id === product.id
        );
        const indice = carrito.indexOf(productoEncontrado);
        const nuevoCarrito = [...carrito];
        nuevoCarrito.splice(indice, 1);
        setCarrito(nuevoCarrito);
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                calcularCantidad,
                calcularTotal,
                vaciarCarrito,
                eliminarProducto,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
