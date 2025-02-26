import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const createOrder = async (orderData) => {
  const response = await axios.post(`${API_URL}/orders`, { order: orderData });
  return response.data;
};
