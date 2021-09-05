import { NavLink, useHistory, useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { getPerson } from "../../services/SWAPI";
import { getIdFromUrl } from "../../helpers/index";
import { useQuery } from "react-query";

const Person = () => {
  const { personId } = useParams();
  const history = useHistory();

  const { data } = useQuery("get-person", () => getPerson(personId), {
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
          <dt>Birth year: {data?.birth_year}</dt>
          <dt>Eye color: {data?.eye_color}</dt>
          <dt>Height: {data?.height}cm</dt>
        </dl>

        <hr />

        <NavLink
          className="h6"
          exact
          to={data ? `/planets/${getIdFromUrl(data?.homeworld)}` : "#"}
        >
          Learn about {data?.name}'s Homeworld
        </NavLink>
      </div>
    </Container>
  );
};

export default Person;
