import axios from 'axios';

const apiURL = process.env.NODE_ENV === "development" ? "http://localhost:8000" : "produrl";

axios.defaults.withCredentials = true;

export const defaultRoute = async () => {
  try {
    const res = await axios.get(apiURL);
    return res.data;
  } catch (e) {
    console.error(e.message);
  }
}

export const register = async (newUser) => {
  try {
    const res = await axios.post(`${apiURL}/auth/register`, newUser);
    return res.data;
  } catch (e) {
    console.error(e.message);
  }
}

export const login = async (userInfo) => {
  try {
    const res = await axios.post(`${apiURL}/auth/login`, userInfo);
    return res.data;
  } catch (e) {
    console.error(e.message);
  }
}

export const logout = async() => {
  try {
    await axios.get(`${apiURL}/auth/logout`);
  } catch (e) {
    console.error(e.message);
  }
}

export const getTables = async() => {
  try {
    const res = await axios.get(`${apiURL}/tables/`);
    return res.data;
  } catch (e) {
    console.error(e.message);
  }
}

export const createTable = async(tableInfo) => {
  try {
    const res = await axios.post(`${apiURL}/tables/`, tableInfo);
    return res.data;
  } catch (e) {
    console.error(e.message);
  }
}

export const getLogs = async(tableID) => {
  try {
    const res = await axios.get(`${apiURL}/logs/${tableID}`);
    return res.data;
  } catch (e) {
    console.error(e.message);
  }
}

export const addLog = async(newLog, tableID) => {
  try {
    const res = await axios.post(`${apiURL}/logs/${tableID}`, newLog);
    return res.data;
  } catch (e) {
    console.error(e.message);
  }
}

export const editLog = async(newLog, id) => {
  try {
    await axios.put(`${apiURL}/logs/${id}`, newLog);
  } catch (e) {
    console.error(e.message);
  }
}

export const deleteLog = async(id) => {
  try {
    await axios.delete(`${apiURL}/logs/${id}`);
  } catch (e) {
    console.error(e.message);
  }
}