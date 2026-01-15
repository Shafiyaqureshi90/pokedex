// src/components/PokemonList.js
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const limit = 20; // Pokémon per page

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * limit;
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await res.json();
        setTotalPages(Math.ceil(data.count / limit));

        const promises = data.results.map(async (pokemon) => {
          const pokeRes = await fetch(pokemon.url);
          return await pokeRes.json();
        });
        const results = await Promise.all(promises);
        setPokemonData(results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemon();
  }, [currentPage]);

  const filteredData = pokemonData.filter((pokemon) =>
    pokemon.name.includes(search)
  );

  if (loading) return <p>Loading Pokémon...</p>;

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="pokemon-grid">
        {filteredData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
