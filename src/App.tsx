import React from 'react';
import PokemonCard from './components/PokemonsCard';

function App() {
  return (
    <div>
      <h1>Mon Pokédex</h1>
      <PokemonCard 
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
        name="Bulbazaur" 
      />
    </div>
  );
}

export default App;
