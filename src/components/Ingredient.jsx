import { Stack } from "react-bootstrap";
import { ingredientFormatter } from "../utilities/ingredientFormatter";
import IngredientRow from "./IngredientRow";

const Ingredient = ({ ingredients }) => {
  const ingredientsArr = ingredientFormatter(ingredients);

  return (
    <>
      <Stack gap={2}>
        {ingredientsArr.map((ingredient, index) => (
          <IngredientRow ingredient={ingredient} key={index} />
        ))}
      </Stack>
    </>
  );
};

export default Ingredient;
