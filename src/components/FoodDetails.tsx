// src/components/FoodDetails.tsx
import React from 'react';
import useFood from '../hooks/useFood';

const FoodDetails = () => {
  const { foodDetails } = useFood();

  if (!foodDetails) {
    return <div>Selecione um alimento para ver os detalhes.</div>;
  }

  return (
    <div>
      <h2>{foodDetails.name}</h2>
      <ul>
        {foodDetails.nutrients.map((nutrient) => (
          <li key={nutrient.id}>
            {nutrient.label}: {nutrient.value} {nutrient.unit} ({nutrient.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodDetails;
