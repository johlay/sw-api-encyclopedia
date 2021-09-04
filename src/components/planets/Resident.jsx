import { getIdFromUrl } from "../../helpers/index";
import { getPerson } from "../../services/SWAPI";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Resident = ({ resident }) => {
  const uniqueId = getIdFromUrl(resident);

  const { data } = useQuery("get-person-" + uniqueId, () =>
    getPerson(uniqueId)
  );

  return (
    <>
      <p>
        <NavLink to={data ? `/people/${getIdFromUrl(data.url)}` : "#"}>
          {data?.name}
        </NavLink>
      </p>
    </>
  );
};

export default Resident;
