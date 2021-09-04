/**
 * SWAPI
 */

import axios from "axios";

const baseURL = "https://swapi.dev/api";

// Notes:
// No need to throw error if data fetching failed.
// Axios automatically throws errors
// React Query expects a promise.

/* Resource */
export const getResource = async (endpoint, page = "") => {
  if (endpoint === null || undefined) return;

  const response = await axios(baseURL + endpoint + page);

  return response.data;
};

export const getFilm = async (id) => {
  const response = await axios(baseURL + "/films/" + id);

  return response.data;
};

export const getPerson = async (id) => {
  const response = await axios(baseURL + "/people/" + id);

  return response.data;
};

export const getPlanet = async (id) => {
  const response = await axios(baseURL + "/planets/" + id);

  return response.data;
};

export const getSpecie = async (id) => {
  const response = await axios(baseURL + "/species/" + id);

  return response.data;
};

export const getStarship = async (id) => {
  const response = await axios(baseURL + "/starships/" + id);

  return response.data;
};

export const getVehicle = async (id) => {
  const response = await axios(baseURL + "/vehicles/" + id);

  return response.data;
};

// /* Films */
// export const getFilms = async (endpoint = "/films/") => {
//   const response = await axios(baseURL + endpoint);

//   return response.data;
// };

// /* People */
// export const getPeople = async (endpoint = "/people/") => {
//   const response = await axios(baseURL + endpoint);

//   return response.data;
// };

// /* Planets */
// export const getPlanets = async (endpoint = "/planets/") => {
//   const response = await axios(baseURL + endpoint);

//   return response.data;
// };

// /* Species */
// export const getSpecies = async (endpoint = "/species/") => {
//   const response = await axios(baseURL + endpoint);

//   return response.data;
// };

// /* Starships */
// export const getStarships = async (endpoint = "/starships/") => {
//   const response = await axios(baseURL + endpoint);
//   console.log("response", response);
//   return response;
// };

// /* Vehicles */
// export const getVehicles = async (endpoint = "/vehicles/") => {
//   const response = await axios(baseURL + endpoint);

//   return response.data;
// };
