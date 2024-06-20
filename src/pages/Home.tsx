import React, { useState } from 'react';
import { useFood } from '../contexts/FoodContext';
import FoodList from '../components/FoodList';

const Home: React.FC = () => {
  const { search, foods, getDetails } = useFood();
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    search(term);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleFoodClick = (id: number) => {
    getDetails(id);
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Search for food"
      />
      <button onClick={handleSearch}>Search</button>
      <FoodList foods={foods} onFoodClick={handleFoodClick} />
    </div>
  );
};

export default Home;
