// src/components/PokemonCard.js
import React from "react";

const typeColors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const PokemonCard = ({ pokemon }) => {
  const types = pokemon.types.map((type) => type.type.name);
  const bgColor = typeColors[types[0]] || "#F5F5F5";

  return (
    <div className="pokemon-card" style={{ backgroundColor: bgColor }}>
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <p>Type: {types.join(", ")}</p>
      <p>Height: {pokemon.height / 10} m</p>
      <p>Weight: {pokemon.weight / 10} kg</p>
    </div>
  );
};

export default PokemonCard;
