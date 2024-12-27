import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Sean bienvenidos a esta tienda online de bebidas para que te tomes de todo menos vacaciones" />
    </div>
  )
}

export default App