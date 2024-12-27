import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
  return (
    <h1 style={{ textAlign: 'center', color: 'aqua' }}>
    {greeting}
  </h1>

  )
};

export default ItemListContainer