// src/components/SearchBar.tsx
import React, { useState } from 'react';
import useFood from '../hooks/useFood';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const { search } = useFood();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search(term);
    }
  };

  return (
    <input
      type="text"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      onKeyDown={handleSearch}
      placeholder="Digite um termo para buscar"
    />
  );
};

export default SearchBar;
