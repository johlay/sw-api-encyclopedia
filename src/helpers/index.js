export const getIdFromUrl = (url) => {
  // eslint-disable-next-line
  const [endpoint, id] = url
    .replace("https://swapi.dev/api/", "")
    .slice(0, -1)
    .split("/");
  return id;
};
