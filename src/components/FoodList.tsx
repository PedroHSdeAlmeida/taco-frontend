import React from 'react';

interface FoodListProps {
  foods: any[];
  onFoodClick: (id: number) => void;
}

const FoodList: React.FC<FoodListProps> = ({ foods, onFoodClick }) => {
  if (!Array.isArray(foods)) {
    return <div>No foods found</div>; // ou alguma mensagem de erro adequada
  }

  return (
    <ul>
      {foods.map((food) => (
        <li key={food.id} onClick={() => onFoodClick(food.id)}>
          {food.description}
        </li>
      ))}
    </ul>
  );
};

export default FoodList;
