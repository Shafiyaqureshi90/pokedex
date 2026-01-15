// src/components/SearchBar.js
import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search Pokémon..."
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
