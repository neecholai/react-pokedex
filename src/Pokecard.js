import React from 'react';
import './Pokecard.css';


function Pokecard(props) {
  const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  return (
    <div className="Pokecard">
      <div className='Pokecard-title'>
        {props.name}
      </div>
      <div className='Pokecard-image'>
        <img src={ `${BASE_URL}/${props.id}.png` } alt='pokemon'/>
      </div>
      <div className='Pokecard-info'>
        <div>Type: {props.type} </div>
        <div>EXP: {props.baseExperience} </div>
      </div>
    </div>
  );
}

export default Pokecard;