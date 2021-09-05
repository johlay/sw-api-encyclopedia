import { useHistory, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { getStarship } from "../../services/SWAPI";
import { useQuery } from "react-query";

const Specie = () => {
  const { shipId } = useParams();
  const history = useHistory();

  const { data } = useQuery("get-specie", () => getStarship(shipId), {
    keepPreviousData: true,
  });

  console.log(data);
  return (
    <Container>
      <Button className="my-3" onClick={() => history.push("/")}>
        Go back
      </Button>
      <div className="my-5">
        <h2>{data?.name}</h2>

        <dl className="text-warning">
          <dt>Cargo capacity: {data?.cargo_capacity}</dt>
          <dt>Consumables: {data?.consumables}</dt>
          <dt>Cost in credits: {data?.cost_in_credits}</dt>
        </dl>
        <hr />
      </div>
    </Container>
  );
};

export default Specie;
