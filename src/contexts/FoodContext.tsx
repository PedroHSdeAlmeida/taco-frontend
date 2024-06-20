import React, { createContext, useContext, useState, ReactNode } from 'react';
import { searchFood, getFoodDetails, listFoods } from '../services/foodService';

interface FoodContextProps {
  search: (term: string) => void;
  getDetails: (id: number) => void;
  list: (page: number, pageSize: number) => void;
  foods: any[];
  details: any;
}

interface FoodProviderProps {
  children: ReactNode;
}

const FoodContext = createContext<FoodContextProps | undefined>(undefined);

export const FoodProvider: React.FC<FoodProviderProps> = ({ children }) => {
  const [foods, setFoods] = useState<any[]>([]);
  const [details, setDetails] = useState<any>(null);

  const search = async (term: string) => {
    const result = await searchFood(term);
    setFoods(result);
  };

  const getDetails = async (id: number) => {
    const result = await getFoodDetails(id);
    setDetails(result);
  };

  const list = async (page: number, pageSize: number) => {
    const result = await listFoods(page, pageSize);
    setFoods(result);
  };

  return (
    <FoodContext.Provider value={{ search, getDetails, list, foods, details }}>
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
