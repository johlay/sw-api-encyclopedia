import { useHistory } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

const OverviewPagination = ({ count, page, setPage, searchText }) => {
  const history = useHistory();
  let items = [];

  for (let number = 1; number <= count; number++) {
    items.push(
      <Pagination.Item
        active={number === page}
        activeLabel={false}
        onClick={() => {
          // history.push(`?page=${number}`);
          // history.push(
          //   searchText
          //     ? `?page=${number}&search=${searchText}`
          //     : `?page=${number}`
          // );

          setPage(number);
        }}
        key={number}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.Prev
        disabled={page === 1}
        onClick={() => {
          setPage((prev) => {
            if (prev === 1) return 1;

            return prev - 1;
          });
        }}
      />
      {items.map((item) => item)}
      <Pagination.Next
        disabled={page === count}
        onClick={() => {
          setPage((prev) => {
            if (prev === count) return count;

            return prev + 1;
          });
        }}
      />
    </Pagination>
  );
};

export default OverviewPagination;
