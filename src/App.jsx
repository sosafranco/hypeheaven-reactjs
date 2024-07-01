import './css/main.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';

function App() {

    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route
                        path='/category/:categoryId'
                        element={<ItemListContainer />}
                    />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path='/carrito' element={<Carrito />} />
                    <Route path='/finalizar-compra' element={<Checkout />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
