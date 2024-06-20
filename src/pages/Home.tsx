// src/pages/HomePage.tsx
import React from 'react';
import SearchBar from '../components/SearchBar';
import FoodList from '../components/FoodList';
import FoodDetails from '../components/FoodDetails';

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <FoodList />
      <FoodDetails />
    </div>
  );
};

export default HomePage;
