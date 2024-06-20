// src/hooks/useFood.ts
import { useContext } from 'react';
import { FoodContext } from '../contexts/FoodContext';

const useFood = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error('useFood must be used within a FoodProvider');
  }
  return context;
};

export default useFood;
