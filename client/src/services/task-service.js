import axios from "axios";

export const getTasks = () => axios.get('/api/task');

export const getTask = (id) => axios.get(`/api/task/${id}`);

export const createTask = (task) => axios.post('/api/task', task);

export const updateTask = (id, task) => axios.put(`/api/task/${id}`, task);

export const deleteTask = (id) => axios.delete(`/api/task/${id}`);
