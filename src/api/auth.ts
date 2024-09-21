import axios from 'axios';
import {IDealComponent} from '../components/DealComponents'

const API_URL = 'https://express-zenbittech-task.onrender.com';

export const getDeals = async (): Promise<IDealComponent[]> => {
  const response = await axios.get<IDealComponent[]>(`${API_URL}/api/deals`);
  return response.data;
};

