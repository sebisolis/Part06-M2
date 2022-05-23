import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div>
      <input type="search" placeholder="Ciudad..."/>
      <button onClick={() => onSearch('Buscando...')}>Agregar</button>
    </div>
  )
};