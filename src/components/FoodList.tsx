// src/components/FoodList.tsx
import React from 'react';
import useFood from '../hooks/useFood';

const FoodList = () => {
  const { foods } = useFood();

  if (!Array.isArray(foods)) {
    console.log(foods);
    return <div>Erro: alimentos não encontrados</div>;
  }

  return (
    <div>
      {foods.map((food) => (
        <div key={food.id}>
          {food.description}
        </div>
      ))}
    </div>
  );
};

export default FoodList;
