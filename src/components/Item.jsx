import React from 'react'

const Item = ({ products }) => {
    return (
        <div className='producto'>
            <img className='producto-imagen' src={products.imagen} alt="" />
            <div className='producto-detalles'>
                <h2 className='producto-titulo'>{products.titulo}</h2>
                <p className='producto-precio'>${products.precio}</p>
                <button className='producto-ver-mas'>Ver detalle</button>
            </div>
        </div>
    )
}

export default Item
