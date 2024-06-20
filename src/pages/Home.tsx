import React, { useState } from 'react';
import { useSearchFood, useFoodDetails, useListFoods } from '../hooks/useFood';
import FoodList from '../components/FoodList';
import FoodDetails from '../components/FoodDetails';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { search, foods } = useSearchFood();
  const { getDetails, details } = useFoodDetails();
  const { list } = useListFoods();

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      search(searchTerm);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleSearch}
        placeholder="Search for food..."
      />
      <FoodList foods={foods} onFoodClick={getDetails} />
      {details && <FoodDetails details={details} />}
    </div>
  );
};

export default Home;
