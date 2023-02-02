import { Card, Button, Stack, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Ingredient from "./Ingredient";
import { HeartFill, PlusLg } from "react-bootstrap-icons";
import { likeNewRecipe, addNewItem } from "../utilities/addNewItem";
import { useAppContext } from "../context/AppContext";
import { ingredientFormatter } from "../utilities/ingredientFormatter";

export default function RecipeCard({ recipe }) {

  const { savedRecipes, setSavedRecipes, savedItems, setSavedItems } = useAppContext();

  const handleAddAll = () => {
    addNewItem(ingredientFormatter(recipe.ingredients), savedItems, setSavedItems);
  }

  const handleLike = () => {
    if(!checkLiked(recipe))
      likeNewRecipe(recipe, savedRecipes, setSavedRecipes);
    else
      setSavedRecipes(savedRecipes.filter(elem => recipe.instructions !== elem.instructions));
  }

  const checkLiked = (recipe) => {
    for(let i = 0; i < savedRecipes.length; i++)
      if(savedRecipes[i].instructions === recipe.instructions) return true;

    return false
  }

  //Tooltips
  const likeToolTip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Save to Likes
    </Tooltip>
    )
  const addAllToolTip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add all ingredients
    </Tooltip>
    )

  return (
    <Card>
      <Card.Header className="fw-bold fs-5">{recipe.title}</Card.Header>
      <Card.Body>
        <h3 className="lead text-primary fw-bold">Ingredients:</h3>
        <Ingredient ingredients={recipe.ingredients} />
        <br />
        <h3 className="lead text-primary fw-bold">Instructions:</h3>
        {recipe.instructions}
        <br />
        <br />
        {
          recipe.hasOwnProperty('servings') ?
          <>
          <h3 className="lead text-primary fw-bold">Servings:</h3>
          {recipe.servings}
          </>
          :
          <>
          </>
        }
        <Stack
          gap="2"
          direction="horizontal"
          className="my-3 justify-content-end"
        >
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 150, hide: 150 }}
            overlay={likeToolTip}
          >
            <Button variant="outline-secondary" onClick={() => handleLike()}>
              <span className="visually-hidden">like it</span>
              <HeartFill className={`${checkLiked(recipe) ? 'text-danger' : 'text-secondary'}`}
              />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 150, hide: 150 }}
            overlay={addAllToolTip}
          >
          <Button variant="warning" onClick={() => handleAddAll()}>
            <span className="visually-hidden">add all to tobuy</span>
            <PlusLg/>
          </Button>
          </OverlayTrigger>
        </Stack>
      </Card.Body>
    </Card>
  );
}
