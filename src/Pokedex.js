import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
import { pokecards } from './globals';


function Pokedex(props) {


  return (
    <div className='Pokedex'>
      <div className='Pokedex-title'>Pokedex</div>
      <div className='Pokedex-container'>
        { props.pokecards.map((card, index) => {
            return ( 
              <Pokecard
                key={index}
                id={card.id}
                name={card.name}
                type={card.type}
                baseExperience={card.base_experience} />
            );
          })
        }
        {props.isWinner ? <p>THIS HAND WINS!</p> : null}
      </div>
    </div>
  );
}

Pokedex.defaultProps = { pokecards }

export default Pokedex;