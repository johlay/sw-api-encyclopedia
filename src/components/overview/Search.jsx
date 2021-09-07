import { useHistory } from "react-router-dom";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const Search = ({ setPage, searchText, setSearchText }) => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`?page=&search=${searchText}`);

    setPage(1);
  };

  return (
    <>
      <Form onClick={onSubmit}>
        <InputGroup className="mb-3">
          <Button type="submit" variant="warning">
            Look for
          </Button>
          <FormControl
            value={searchText}
            type="text"
            placeholder="..."
            aria-label="Search in swapi database"
            aria-describedby="basic-addon2"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </InputGroup>
      </Form>
    </>
  );
};

export default Search;
