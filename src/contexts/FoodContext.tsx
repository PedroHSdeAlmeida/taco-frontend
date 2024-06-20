// src/contexts/FoodContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { searchFood, getFoodDetails, listFoods } from '../services/foodService';
import { Food, FoodDetails, FoodContextType } from '../types/foodTypes';

const FoodContext = createContext<FoodContextType | undefined>(undefined);

interface FoodProviderProps {
  children: ReactNode;
}

export const FoodProvider = ({ children }: FoodProviderProps) => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [foodDetails, setFoodDetails] = useState<FoodDetails | null>(null);
  const [page, setPage] = useState(1);

  const search = async (term: string) => {
    const data = await searchFood(term);
    setFoods(data);
  };

  const getDetails = async (id: number) => {
    const data = await getFoodDetails(id);
    setFoodDetails(data);
  };

  const list = async (page: number) => {
    const data = await listFoods(page, 10);
    setFoods(data);
    setPage(page);
  };

  return (
    <FoodContext.Provider value={{ foods, foodDetails, search, getDetails, list, page }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error('useFood must be used within a FoodProvider');
  }
  return context;
};

export { FoodContext };
