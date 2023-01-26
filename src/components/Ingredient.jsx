import { Button, Dropdown, Stack } from "react-bootstrap";
import { ingredientFormatter } from "../utilities/ingredientFormatter";
import { useAppContext } from "../context/AppContext";
import { addNewItem } from "../utilities/addNewItem";
import { Plus } from "react-bootstrap-icons";

const Ingredient = ({ ingredients }) => {
  const { savedItems, setSavedItems } = useAppContext();
  const ingredientsArr = ingredientFormatter(ingredients);

  return (
    <Stack gap={2}>

      {ingredientsArr.map((ingredient, index) => {
        return (
          <div key={index} className="d-flex align-items-center ">
            <div className="me-auto">{ingredient}</div>
            <Button className="p-0" onClick={() => addNewItem(ingredient, savedItems, setSavedItems)}><Plus className="fs-3"/></Button>
          </div>
        );
      })}

    </Stack>
  );
};

export default Ingredient;
