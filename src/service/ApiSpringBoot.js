import axios from 'axios';

const ApiSpringBoot = axios.create({
  baseURL: "http://localhost:8080/api"
});

export const postUser = async (userData) => {
  try {
    const response = await ApiSpringBoot.post('/user', userData);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

export default ApiSpringBoot;