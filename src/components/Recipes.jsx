import { useRef } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useAppContext } from "../context/AppContext";
import { getRecipes, setOptions } from "../utilities/getRecipes";
import MasonryLayout from "./MasonryLayout";

export default function Recipes() {
  const { searchedRecipes, setSearchedRecipes } = useAppContext();
  const inputRef = useRef();

  const handleClick = () => {
    getRecipes(setOptions(inputRef.current.value)).then((res) => {
      setSearchedRecipes(res);
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Container
      id="section-search"
      className="pt-2"
      style={{ minHeight: "85vh" }}
    >
      <Row className="justify-content-center my-5">
        <Col md="8">
          <InputGroup>
            <Form.Control
              ref={inputRef}
              placeholder="e.g. fried egg"
              aria-label="Search for recipes"
              aria-describedby="search-btn"
              onKeyDown={handleKeyDown}
            />
            <Button
              onClick={() => handleClick()}
              variant="outline-success"
              id="search-btn"
            >
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {searchedRecipes?.length >= 1 ? (
        <MasonryLayout recipes={searchedRecipes} />
      ) : (
        <h1 className="text-dark text-center">Search for recipes</h1>
      )}
    </Container>
  );
}
