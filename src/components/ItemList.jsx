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
                    : <p>"Loading products..."</p>
            }
        </div>
    )
}

export default ItemList
