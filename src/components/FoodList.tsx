// src/components/FoodList.tsx
import React from 'react';
import useFood from '../hooks/useFood';

const FoodList = () => {
  const { foods, getDetails, list, page } = useFood();

  const handleClick = (id: number) => {
    getDetails(id);
  };

  const handleNextPage = () => {
    list(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      list(page - 1);
    }
  };

  if (!Array.isArray(foods)) {
    console.log(foods);
    return <div>Erro: alimentos não encontrados</div>;
  }

  return (
    <div>
      {foods.map((food) => (
        <div key={food.id} onClick={() => handleClick(food.id)}>
          {food.description}
        </div>
      ))}
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>Anterior</button>
        <button onClick={handleNextPage}>Próxima</button>
      </div>
    </div>
  );
};

export default FoodList;
