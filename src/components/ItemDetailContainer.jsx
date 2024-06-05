import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/products.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    let { itemId } = useParams();
    let [product, setProduct] = useState(null);

    useEffect(() => {
        const buscarProducto = data.find((prod) => prod.id === itemId);
        setProduct(buscarProducto);
    }, [itemId]);

    return (
        <div>
            {product ? (
                <ItemDetail
                    titulo={product.titulo}
                    precio={product.precio}
                    imagen={product.imagen}
                />
            ) : (
                'Cargando información del producto...'
            )}
        </div>
    );
};

export default ItemDetailContainer;
