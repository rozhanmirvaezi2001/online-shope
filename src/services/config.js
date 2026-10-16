import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

api.interceptors.response.use((res) => res.data);

export default api;

export const getProduct = (id = "") => api.get(`/products/${id}`);
