import { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getResource } from "../../services/SWAPI";
import { getIdFromUrl } from "../../helpers/index";
import { ListGroup } from "react-bootstrap";
import OverviewPagination from "./OverviewPagination";

const ResourceList = ({ endpoint }) => {
  const [page, setPage] = useState(1);
  const history = useHistory();
  const location = useLocation();

  const { data, refetch } = useQuery(
    "resource-list",
    () => getResource(endpoint + location.search),
    { keepPreviousData: true }
  );

  useEffect(() => {
    return () => {
      setPage(1);
      // setEndpoint(null);
    };
  }, []);

  useEffect(() => {
    // refetches data when category is changed
    refetch();

    // reset page to 1
    setPage(1);

    // reset url to: "/"
    history.push("/");
  }, [endpoint]);

  useEffect(() => {
    if (location.search) {
      refetch();
    }
  }, [location]);

  useEffect(() => {
    history.push(`?page=${page}`);
  }, [page]);

  const countProps = data && Math.ceil(data.count / 10);

  const values = { data, page, setPage };

  return (
    <>
      <div className="my-5 mx-auto">
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
      </div>

      {data && <OverviewPagination {...values} count={countProps} />}
    </>
  );
};

export default ResourceList;
