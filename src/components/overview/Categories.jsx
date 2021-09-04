import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ResourceList from "./ResourceList";

const Categories = () => {
  const [endpoint, setEndpoint] = useState(null);

  return (
    <>
      <h1>Categories</h1>
      <ButtonGroup className="mt-2">
        {/* <Button className="text-secondary" onClick={() => setEndpoint("/films/")}>
            Films
          </Button> */}
        <Button variant="primary" onClick={() => setEndpoint("/people/")}>
          People
        </Button>
        <Button variant="primary" onClick={() => setEndpoint("/planets/")}>
          Planets
        </Button>
        <Button onClick={() => setEndpoint("/species/")}>Species</Button>
        <Button onClick={() => setEndpoint("/starships/")}>Starships</Button>
        <Button onClick={() => setEndpoint("/vehicles/")}>Vehicles</Button>
      </ButtonGroup>
      <ResourceList endpoint={endpoint} />
    </>
  );
};

export default Categories;
