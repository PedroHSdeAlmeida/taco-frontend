// src/types/foodTypes.ts
export interface Food {
    id: number;
    description: string;
  }
  
  export interface Nutrient {
    id: number;
    label: string;
    value: number;
    unit: string;
    category: string;
  }
  
  export interface FoodDetails {
    id: number;
    name: string;
    nutrients: Nutrient[];
  }
  
  export interface FoodContextType {
    foods: Food[];
    foodDetails: FoodDetails | null;
    search: (term: string) => void;
    getDetails: (id: number) => void;
    list: (page: number) => void;
    page: number;
  }
  