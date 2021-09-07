import { NavLink } from "react-router-dom";
import { getIdFromUrl } from "../../helpers/index";
import { ListGroup } from "react-bootstrap";

const ShowCategory = ({ data, endpoint }) => {
  return (
    <ListGroup as="ul">
      {data &&
        data?.results?.map((resource, index) => {
          return (
            <ListGroup.Item as="li" key={index}>
              <NavLink exact to={endpoint + getIdFromUrl(resource.url)}>
                {resource.name}
              </NavLink>
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

export default ShowCategory;
