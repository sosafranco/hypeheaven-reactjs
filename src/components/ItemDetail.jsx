import React from 'react';

const ItemDetail = ({ titulo, precio, imagen }) => {
    return (
        <div className='item-detail'>
            <img className='item-image' src={imagen} alt={titulo} />
            <div className='item-info'>
                <p className='item-title'>{titulo}</p>
                <p className='item-price'>Starting at ${precio}</p>
            </div>
        </div>
    );
};

export default ItemDetail;
