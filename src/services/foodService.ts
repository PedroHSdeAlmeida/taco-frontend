// src/services/foodService.ts
import axios from 'axios';
import { Food, FoodDetails } from '../types/foodTypes';

const API_URL = 'http://localhost:3021/food';

export const searchFood = async (term: string): Promise<Food[]> => {
  const response = await axios.get(`${API_URL}/search`, { params: { term } });
  return response.data.items; // Retorna apenas o array de alimentos
};

export const getFoodDetails = async (id: number): Promise<FoodDetails> => {
  const response = await axios.get(`${API_URL}/get`, { params: { idfood: id } });
  return response.data;
};

export const listFoods = async (page: number, pageSize: number): Promise<Food[]> => {
  const response = await axios.get(`${API_URL}/list`, { params: { page, pagesize: pageSize } });
  return response.data.items; // Retorna apenas o array de alimentos
};
