import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Link } from 'react-router-dom';

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
                <h1 className='main-title'>Thank you for shopping in HypeHeaven!</h1>
                <p className='main-title'>To track your order, use the following identifier: {docId}</p>
                <Link className='back-to-home-button' to='/'>Back to home</Link>
            </>
        );
    }

    return (
        <div>
            <form className='form-checkout' onSubmit={handleSubmit(comprar)}>
                <h1 className='main-title'>Please fill in your data to continue with the purchase process.</h1>
                <input className='form-input'
                    type='text'
                    placeholder='Nombre'
                    {...register('nombre')}
                />
                <input className='form-input'
                    type='text'
                    placeholder='Apellido'
                    {...register('apellido')}
                    />
                <input className='form-input'
                    type='email'
                    placeholder='Mail'
                    {...register('email')}
                />
                <button className='form-submit' type='submit'>Purchase</button>
            </form>
        </div>
    );
};

export default checkout;
