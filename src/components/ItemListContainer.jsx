import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {
    let { categoryId } = useParams();
    let [products, setProducts] = useState([]);

    let [titulo, setTitulo] = useState("What's in store?");

    useEffect(() => {
        const productosRef = collection(db, 'productos');
        const q = categoryId
            ? query(productosRef, where('categoria.id', '==', categoryId))
            : productosRef;

        const categoriasRef = collection(db, 'categorias');
        let catQuery =
            categoryId && query(categoriasRef, where('id', '==', categoryId));

        getDocs(q).then((res) => {
            setProducts(
                res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                })
            );
        });

        if (catQuery) {
            getDocs(catQuery).then((res) => {
                setTitulo(res.docs[0].data().nombre);
            });
        }
    }, [categoryId]);

    return (
        <div className='list-container'>
            <main>
                <p className='need-help'>
                    Need help? contact us on Instagram @hypeheaven
                </p>
                <h1 className='main-title'>{titulo}</h1>
                <ItemList products={products} />
            </main>
        </div>
    );
};

export default ItemListContainer;
