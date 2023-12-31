import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const reqToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const reqData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const reqLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const postSales = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body, {
    headers: {
      'Content-type': 'application/json',
      Authorization: body.token,
    },
  });
  return data;
};

export const postRegister = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const reqSellers = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const reqSellerById = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const reqOrders = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default api;
