import { fetchWithDelay } from "./fetch";
const url = "https://restcountries.eu/rest/v2/all";

const fetchUsers = () => fetchWithDelay(url);

export const userAPI = {
  fetchUsers,
};
