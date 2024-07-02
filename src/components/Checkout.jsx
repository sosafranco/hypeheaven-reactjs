import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const checkout = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState('');

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
        };

        const pedidosRef = collection(db, 'pedidos');

        addDoc(pedidosRef, pedido).then((doc) => {
            setDocId(doc.id);
            vaciarCarrito();
        });
    };

    if (docId) {
        return (
            <>
                <h1>Thank you for shopping in HypeHeaven!</h1>
                <p>To track your order, use the following identifier:{docId}</p>
            </>
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit(comprar)}>
                <input
                    type='text'
                    placeholder='ingrese su nombre'
                    {...register('nombre')}
                />
                <input
                    type='email'
                    placeholder='ingrese su email'
                    {...register('email')}
                />
                <button type='submit'>Comprar</button>
            </form>
        </div>
    );
};

export default checkout;
