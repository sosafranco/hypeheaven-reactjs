import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// const ItemDetailContainer = () => {
//     let { itemId } = useParams();
//     let [product, setProduct] = useState(null);

//     useEffect(() => {

//         const docRef = doc(db, "productos", itemId);
//         getDoc(docRef)
//             .then(res => {
//                 setProduct({...res.data(), id: res.id});
//             });

//     }, [itemId]);

//     return (
//         <div>{product ? (<ItemDetail product={product} />) : (<h1 className='main-title'>Cargando información del producto...</h1>)}</div>
//     );
// };


const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);
    let [loading, setLoading] = useState(true);

    useEffect(() => {

        const docRef = doc(db, "productos", itemId);
        getDoc(docRef)
            .then(res => {
                if (res.data()) {
                    setProducto({ ...res.data(), id: res.id });
                }
                setLoading(false);
            })

    }, [itemId]);

    if (loading) {
        return <h1 className='main-title'>Loading product detail...</h1>
    } else if (producto) {
        return <ItemDetail producto={producto} />
    } else {
        return <h2 className='main-title'>Product not found</h2>
    }
}

export default ItemDetailContainer;
