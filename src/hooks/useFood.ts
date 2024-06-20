import { useFood } from '../contexts/FoodContext';

export const useSearchFood = () => {
  const { search, foods } = useFood();
  return { search, foods };
};

export const useFoodDetails = () => {
  const { getDetails, details } = useFood();
  return { getDetails, details };
};

export const useListFoods = () => {
  const { list, foods } = useFood();
  return { list, foods };
};
