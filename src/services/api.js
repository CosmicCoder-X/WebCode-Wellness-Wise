import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Update to your backend URL
});

export const login = (email, password) => api.post('/login', { email, password });
export const signUp = (email, password) => api.post('/signup', { email, password });
export const logActivity = (data) => api.post('/activity', data);
export const logMood = (data) => api.post('/mood', data);

export default api;