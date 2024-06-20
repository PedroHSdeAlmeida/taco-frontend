import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3021',
});

export const searchFood = async (term: string) => {
  const response = await api.get(`/food/search?term=${term}`);
  return Array.isArray(response.data) ? response.data : [];
};

export const getFoodDetails = async (id: number) => {
  const response = await api.get(`/food/get?idfood=${id}`);
  return response.data;
};

export const listFoods = async (page: number, pageSize: number) => {
  const response = await api.get(`/food/list?page=${page}&pagesize=${pageSize}`);
  return response.data;
};
