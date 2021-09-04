import { createContext, useState } from "react";

export const SwapiContext = createContext();

const SwapiContextProvider = ({ children }) => {
  const [resourceUrl, setResourceUrl] = useState("");

  return (
    <SwapiContext.Provider value={{ resourceUrl, setResourceUrl }}>
      {children}
    </SwapiContext.Provider>
  );
};

export default SwapiContextProvider;
