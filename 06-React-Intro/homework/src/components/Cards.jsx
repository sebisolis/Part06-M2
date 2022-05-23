import React from 'react';
import Card from './Card';

// RECIBO UN ARRAY DE CIUDAD EN PROPS
export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <>
      {cities.map(city => (
        <Card
          key={city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onclose={() => alert(city.name)}
        />
      ))}
    </>
  )
};