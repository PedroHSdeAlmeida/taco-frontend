import React from 'react';

interface Nutrient {
  id: string;
  label: string;
  value: number;
  unit: string;
  category: string;
}

interface FoodDetailsProps {
  details: {
    description: string;
    nutrients: Nutrient[];
  };
}

const FoodDetails: React.FC<FoodDetailsProps> = ({ details }) => {
  return (
    <div>
      <h2>{details.description}</h2>
      <ul>
        {details.nutrients.map((nutrient) => (
          <li key={nutrient.id}>
            {nutrient.label}: {nutrient.value} {nutrient.unit} ({nutrient.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodDetails;