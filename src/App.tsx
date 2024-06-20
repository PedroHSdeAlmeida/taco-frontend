// src/App.tsx
import React from 'react';
import { FoodProvider } from './contexts/FoodContext';
import HomePage from './pages/Home';

const App = () => {
  return (
    <FoodProvider>
      <HomePage />
    </FoodProvider>
  );
};

export default App;
