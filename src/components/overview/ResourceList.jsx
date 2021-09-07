/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getResource } from "../../services/SWAPI";
import OverviewPagination from "./OverviewPagination";
import Search from "./Search";
import ShowCategory from "./ShowCategory";

const ResourceList = ({ endpoint }) => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const history = useHistory();
  const location = useLocation();

  const { data, isLoading, refetch } = useQuery(
    "resource-list",
    () => getResource(endpoint + location.search),
    { keepPreviousData: true }
  );
  useEffect(() => {
    return () => {
      setPage(1);
    };
  }, []);

  useEffect(() => {
    // refetches data when category is changed
    refetch();

    // reset page to 1
    setPage(1);

    // reset search text
    setSearchText("");

    // reset url to: "/"
    history.push("/");
  }, [endpoint]);

  useEffect(() => {
    if (location.search) {
      refetch();
    }
  }, [location]);

  useEffect(() => {
    // history.push(`?page=${page}`);
    if (searchText.length === 0) history.push(`?page=${page}`);

    if (searchText.length > 0)
      history.push(`?page=${page}&search=${searchText}`);
  }, [page]);

  const countProps = data && Math.ceil(data.count / 10);

  const values = { data, page, setPage, searchText, setSearchText, isLoading };

  return (
    <>
      <div className="my-5 mx-auto">
        <Search endpoint={endpoint} {...values} />
        <ShowCategory endpoint={endpoint} data={data} />
      </div>
      {data && <OverviewPagination {...values} count={countProps} />}
    </>
  );
};

export default ResourceList;
