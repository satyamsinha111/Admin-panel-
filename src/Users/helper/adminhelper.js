import { API_URL } from "../../Backend";

export const CreatePortfolio = (userId, token, portfolio) => {
  return fetch(`${API_URL}/portfolio/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: portfolio,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => console.log("SERVER ERROR", error));
};

export const getAllPortfolio = () => {
  return fetch(`${API_URL}/portfolio`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log("SERVER ERROR", error));
};
