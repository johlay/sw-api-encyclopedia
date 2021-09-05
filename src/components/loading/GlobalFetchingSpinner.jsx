import { useIsFetching } from "react-query";
import PropagateLoader from "react-spinners/PropagateLoader";

const GlobalFetchingSpinner = () => {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div className="position-absolute top-50 start-50">
      <PropagateLoader color={"#EFDE18"} size={10} />
    </div>
  ) : null;
};

export default GlobalFetchingSpinner;
