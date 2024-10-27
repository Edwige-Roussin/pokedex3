import React from 'react';

interface PokemonCardProps {
  imageUrl: string;
  name: string;
}

const PokemonCard = ({ imageUrl, name }: PokemonCardProps) => {
  return (
    <figure>
      <img src={imageUrl} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default PokemonCard;

