import { useContext } from "react";
import { SwapiContext } from "../../../contexts/SwapiContextProvider";

const People = () => {
  const { resourceUrl } = useContext(SwapiContext);

  console.log("resourceUrl", resourceUrl);

  return (
    <>
      <h2></h2>
      <p></p>
    </>
  );
};

export default People;
