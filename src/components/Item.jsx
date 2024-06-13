import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ products }) => {
    return (
        <div className='producto'>
            <img className='producto-imagen' src={products.imagen}/>
            <div className='producto-detalles'>
                <h2 className='producto-titulo'>{products.titulo}</h2>
                <Link className='producto-ver-mas' to={`/item/${products.id}`}>See details</Link>
            </div>
        </div>
    )
}

export default Item
