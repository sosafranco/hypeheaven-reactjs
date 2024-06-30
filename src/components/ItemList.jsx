import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <div className='contenedor-productos'>
            {
                products.length > 0 ?
                    products.map((products) => {
                        return <Item products={products} />
                    })
                    : <h1 className='main-title'>Loading products...</h1>
            }
        </div>
    )
}

export default ItemList
