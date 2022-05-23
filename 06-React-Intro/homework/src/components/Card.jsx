import React from 'react';
/*
  props = {
    max,
    min,
    name,
    etc.
  }
*/

export default function Card({max, min, name, img, onclose}) {
  // acá va tu código
  return (
    <div>
      <button onClick={onclose}>X</button>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
      <h2>{name}</h2>
      <p>Min {min}</p>
      <p>Max {max}</p>
    </div>
  )
};