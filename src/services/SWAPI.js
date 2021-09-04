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
export const getResource = async (endpoint) => {
  if (endpoint === null || undefined) return;

  const response = await axios(baseURL + endpoint);

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
