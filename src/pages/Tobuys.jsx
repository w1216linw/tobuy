import { useRef } from "react";
import { Button, Container, Form, InputGroup, Stack } from "react-bootstrap";
import { Hexagon } from "react-bootstrap-icons";
import SingleItem from "../components/SingleItem";
import UnitOffCanvas from "../components/UnitOffCanvas";
import { useAppContext } from "../context/AppContext";
import { addNewItem } from "../utilities/addNewItem";

export default function Tobuys() {
  const { savedItems, setSavedItems } = useAppContext();

  const inputRef = useRef();

  const handleAdd = () => {
    addNewItem(inputRef.current.value, savedItems, setSavedItems);
    inputRef.current.value = "";
  };

  return (
    <main className="list-container">
      <InputGroup className="mx-auto mb-3 px-1" style={{ maxWidth: "40rem" }}>
        <Form.Control
          ref={inputRef}
          aria-label="Item add into the to buy list"
          aria-describedby="add-Btn"
        />
        <Button
          id="add-Btn"
          variant="warning fw-bold text-secondary"
          onClick={() => handleAdd()}
        >
          Add
        </Button>
      </InputGroup>
      <Container className="p-4 mx-auto" style={{ maxWidth: "40rem" }}>
        {savedItems.length < 1 ? (
          <h1 className="text-center">Go Add Some Items.</h1>
        ) : (
          savedItems.map((item) => {
            return (
              <Stack key={item.id} direction="horizontal" gap={2}>
                <Hexagon className="text-warning" />
                <SingleItem item={item} />
              </Stack>
            );
          })
        )}
      </Container>
      <UnitOffCanvas />
    </main>
  );
}
