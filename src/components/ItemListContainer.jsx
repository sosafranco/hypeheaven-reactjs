import React, { useEffect, useState } from 'react'
import data from '../data/products.json';
import categories from '../data/categorias.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    let { categoryId } = useParams();
    let [products, setProducts] = useState([]);

    let [titulo, setTitulo] = useState("What's in store?");

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
                if (!categoryId) {
                    setTitulo("What's in store?");
                    setProducts(res);
                } else {
                    setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
                    setProducts(res.filter((prod) => prod.categoria.id === categoryId))
                }
            })
    }, [categoryId]);


    return (
        <div className='list-container'>
            <main>
                <h1 className='main-title'>{titulo}</h1>
                <ItemList products={products} />
            </main>
        </div >
    )
}

export default ItemListContainer
