import React from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';
import { pokecards } from './globals';
import _ from 'lodash';

function Pokegame(props) {
  const shuffledDeck = _.shuffle(props.pokecards);
  const deck1 = shuffledDeck.slice(0, shuffledDeck.length/2);
  const deck2 = shuffledDeck.slice(shuffledDeck.length/2);

  const deck1Experience = deck1.reduce((acc, nextPokemon) => acc + +nextPokemon.base_experience, 0);
  const deck2Experience = deck2.reduce((acc, nextPokemon) => acc + +nextPokemon.base_experience, 0);


  let deck1IsWinner = false;
  let deck2IsWinner = false;
  if (deck1Experience > deck2Experience) {
    deck1IsWinner = true;
  } else if (deck1Experience < deck2Experience) {
    deck2IsWinner = true;
  }

  return (
    <div>
      <div>
        <Pokedex pokecards={deck1} isWinner={deck1IsWinner}/>
      </div>
      <div>
        <Pokedex pokecards={deck2} isWinner={deck2IsWinner}/>
      </div>
    </div>
  );
}

Pokegame.defaultProps = { pokecards }

export default Pokegame;