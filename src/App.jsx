import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer'
import Header from './components/Header/Header'
import Counter from './components/Counter'
import './css/main.css'

function App() {

  const numerito = 1;

  return (
    <>
      <Header numerito={numerito} />
      <ItemListContainer />
      <Counter />
    </>
  )
}

export default App
