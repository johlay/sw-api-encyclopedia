import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { getResource } from "../../services/SWAPI";
import { getIdFromUrl } from "../../helpers/index";
import { ListGroup } from "react-bootstrap";
import OverviewPagination from "./OverviewPagination";

const ResourceList = ({ endpoint }) => {
  const [page, setPage] = useState(1);
  // const history = useHistory();
  const { data, refetch } = useQuery("resource-list", () =>
    getResource(endpoint)
  );

  useEffect(() => {
    // refetches data when category is changed
    refetch();

    // reset page to 1
    setPage(1);

    // return () => {
    //   history.push("/");
    // };
  }, [endpoint]);

  const countProps = data && Math.ceil(data.count / 10);

  const values = { data, page, setPage };

  return (
    <>
      <div className="my-5 mx-auto">
        <ListGroup as="ul">
          {data &&
            data.results.map((resource, index) => {
              return (
                <ListGroup.Item as="li" key={index}>
                  <NavLink to={getIdFromUrl(resource.url)}>
                    {resource.name}
                  </NavLink>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </div>

      <OverviewPagination {...values} count={countProps} />
    </>
  );
};

export default ResourceList;
