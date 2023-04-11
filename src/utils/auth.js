import { date } from "./constants";

export const BASE__URL = "http://localhost:3001";

async function handleRequest(url, options) {
  const response = await fetch(url, options);
  return handleResponse(response);
}

const handleResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status} ${res.statusText}`);
};

export const register = async (name, avatar, email, password) => {
  return handleRequest(`${BASE__URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((res) => {
    return res;
  });
};

export const login = async (email, password) => {
  return handleRequest(`${BASE__URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (data) {
      localStorage.setItem("token", data.token);
      return date;
    }
  })
};
