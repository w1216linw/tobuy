import { Button } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import Toast from "react-bootstrap/Toast";
import { useAppContext } from "../context/AppContext";
import { addNewItem } from "../utilities/addNewItem";
import useToast from "../utilities/useToast";

const IngredientRow = ({ ingredient }) => {
  const [showToast, _, toggleToast] = useToast(1000);
  const { savedItems, setSavedItems } = useAppContext();

  return (
    <div className="d-flex align-items-center ">
      <div className="me-auto">{ingredient}</div>
      <Button
        className="p-0"
        onClick={() => {
          toggleToast();
          addNewItem(ingredient, savedItems, setSavedItems);
        }}
      >
        <Plus className="fs-3" />
      </Button>
      <Toast
        show={showToast}
        onClose={toggleToast}
        style={{
          position: "absolute",
        }}
      >
        <Toast.Header>
          <strong className="m-auto">Added!</strong>
        </Toast.Header>
      </Toast>
    </div>
  );
};

export default IngredientRow;
