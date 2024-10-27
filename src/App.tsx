import React from 'react';
import PokemonCard from './components/PokemonsCard';

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
    
  },
];

function App() {
  return (
    <div>
      <h1>Mon Pokédex</h1>
      <PokemonCard pokemonList={pokemonList} />
    </div>
  );
}

export default App;
