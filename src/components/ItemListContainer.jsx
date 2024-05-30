import React, { useRef, useEffect, useState } from 'react'
import data from '../data/products.json';
import ItemList from './ItemList';


const ItemListContainer = () => {

    let [products, setProducts] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProducts(res)
                console.log(products);
            })

    }, [])


    return (
        <div className='list-container'>
            <main>
                <h1 className='main-title'>What's in store?</h1>
                <ItemList products={products} />
            </main>
        </div >
    )
}

export default ItemListContainer
