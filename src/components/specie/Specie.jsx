import { useHistory, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { getSpecie } from "../../services/SWAPI";
import { useQuery } from "react-query";

const Specie = () => {
  const { specieId } = useParams();
  const history = useHistory();

  const { data } = useQuery("get-specie", () => getSpecie(specieId), {
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
          <dt>Average height: {data?.average_height} cm</dt>
          <dt>Average lifespan: {data?.average_lifespan} years</dt>
          <dt>Eye colors: {data?.eye_colors}</dt>
        </dl>
        <hr />
      </div>
    </Container>
  );
};

export default Specie;
