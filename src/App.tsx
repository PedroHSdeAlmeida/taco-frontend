import React from 'react';
import Routes from './routes';
import { FoodProvider } from './contexts/FoodContext';

const App: React.FC = () => {
  return (
    <FoodProvider>
      <Routes />
    </FoodProvider>
  );
};

export default App;
