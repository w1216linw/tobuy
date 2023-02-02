import { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useAppContext } from "../context/AppContext";
import { Check2Square, PencilSquare, Save2 } from "react-bootstrap-icons";

export default function SingleItem({ item }) {
  //items list
  const { savedItems, setSavedItems } = useAppContext();

  //editing state
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(item.name);

  const handleDone = () => {
    setSavedItems(
      savedItems.filter((elem) => {
        return elem.id !== item.id;
      })
    );
  };

  const handleEdit = () => {
    if (isEdit === true) handleChange();
    setIsEdit(!isEdit);
  };

  const handleChange = () => {
    const arr = savedItems.map((savedItem) => {
      if (savedItem.id === item.id) {
        return { ...savedItem, name: input };
      }
      return savedItem;
    });

    setSavedItems(arr);
  };

  return (
    <InputGroup className="my-3">
      {isEdit ? (
        <Form.Control
          className="border-danger"
          aria-label="Example text with button addon"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      ) : (
        <div
          className="d-flex align-items-center border border-info bg-white rounded-start"
          style={{ flexGrow: "1", paddingLeft: "0.75rem" }}
        >
          {item.name}
        </div>
      )}

      <Button style={{}} variant="secondary" onClick={() => handleDone()}>
        <span className="visually-hidden">check out</span>
        <Check2Square style={{ fontSize: "1.125rem" }} />
      </Button>
      <Button style={{}} variant="primary" onClick={() => handleEdit()}>
        {isEdit ? (
          <>
            <span className="visually-hidden">save</span>
            <Save2 />
          </>
        ) : (
          <>
            <span className="visually-hidden">edit</span>
            <PencilSquare />
          </>
        )}
      </Button>
    </InputGroup>
  );
}
