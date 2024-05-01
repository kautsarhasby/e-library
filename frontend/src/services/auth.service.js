import { jwtDecode } from "jwt-decode";

export async function login(data, callback) {
  await fetch("http://localhost:5050/account/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const token = data.token;
      callback(true, token);
    })
    .catch((error) => {
      callback(false, error);
    });
}

export async function register(data, callback) {
  await fetch("http://localhost:5050/account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const token = data.token;
      callback(true, token);
    })
    .catch((error) => {
      callback(false, error);
    });
}

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.username;
};
