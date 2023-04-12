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
  })
    .then((res) => {
      return res;
    })
    .catch((err) => console.error(err));
};

export const login = async (email, password) => {
  return handleRequest(`${BASE__URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res) {
      localStorage.setItem("token", res.token);
      return res;
    }
  });
};

export const getUser = async (token) => {
  return handleRequest(`${BASE__URL}/user/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((data) => {
    return data;
  });
};

export const updateUser = async (name, avatar) => {
  return handleRequest(`${BASE__URL}/user/me`, {
    medthod: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then((data) => {
    if (data) {
      return data;
    }
  });
};
