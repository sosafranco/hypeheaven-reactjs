import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {
    let { itemId } = useParams();
    let [product, setProduct] = useState(null);

    useEffect(() => {
        const docRef = doc(db, 'productos', itemId);
        getDoc(docRef).then((res) => {
            setProduct({ ...res.data(), id: res.id });
        });
    }, [itemId]);

    return (
        <div>
            {product ? (
                <ItemDetail product={product} />
            ) : (
                <h1 className='main-title'>Loading product detail...</h1>
            )}
        </div>
    );
};

export default ItemDetailContainer;
