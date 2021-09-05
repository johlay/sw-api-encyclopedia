import { useHistory, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { getPlanet } from "../../services/SWAPI";
import { useQuery } from "react-query";
import Resident from "./Resident";

const Planet = () => {
  const { planetId } = useParams();
  const history = useHistory();

  const { data } = useQuery("get-planet", () => getPlanet(planetId), {
    keepPreviousData: true,
  });

  return (
    <Container>
      <Button className="my-3" onClick={() => history.push("/")}>
        Go back
      </Button>
      <div className="my-5">
        <h2>{data?.name}</h2>

        <dl className="text-warning">
          <dt>Climate: {data?.climate}</dt>
          <dt>Diameter: {data?.diameter}</dt>
          <dt>Population: {data?.population}</dt>
        </dl>
        <hr />

        <h3>List of people that lives on this planet</h3>

        {data &&
          data?.residents?.map((resident, index) => {
            return <Resident resident={resident} key={index} />;
          })}
      </div>
    </Container>
  );
};

export default Planet;
