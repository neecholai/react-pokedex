import React from 'react';
import './Pokecard.css';

function Pokecard(props) {
  return (
    <div className="Pokecard">
      <div className='Pokecard-title'>
        {props.name}
      </div>
      <div className='Pokecard-image'>
        <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png` } alt='pokemon'/>
      </div>
      <div className='Pokecard-info'>
        <div>Type: {props.type} </div>
        <div>EXP: {props.base_experience} </div>
      </div>
    </div>
  );
}

export default Pokecard;