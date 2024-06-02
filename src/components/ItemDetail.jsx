import React from 'react';

const ItemDetail = ({ titulo, precio, imagen }) => {
    return (
        <div>
            <img src={imagen} alt={titulo} />
            <p>{titulo}</p>
            <p>Precio: ${precio}</p>
        </div>
    );
};

export default ItemDetail;
