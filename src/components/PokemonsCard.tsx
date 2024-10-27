import React from 'react';

interface Pokemon {
  name: string;
  imgSrc?: string; 
}

interface PokemonCardProps {
  pokemonList: Pokemon[];
}

const PokemonCard = ({ pokemonList }: PokemonCardProps) => {
  const pokemon = pokemonList[0];

  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

export default PokemonCard;
