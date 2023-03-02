import { useState } from "react";
import {
  Button,
  Card,
  OverlayTrigger,
  Stack,
  Toast,
  Tooltip,
} from "react-bootstrap";
import { HeartFill, PlusLg } from "react-bootstrap-icons";
import { useAppContext } from "../context/AppContext";
import { addNewItem, likeNewRecipe } from "../utilities/addNewItem";
import { ingredientFormatter } from "../utilities/ingredientFormatter";
import useToast from "../utilities/useToast";
import Ingredient from "./Ingredient";

export default function RecipeCard({ recipe }) {
  const { savedRecipes, setSavedRecipes, savedItems, setSavedItems } =
    useAppContext();

  const [showToast, _, toggleToast] = useToast(1500);
  const [like, setLike] = useState(true);
  const [addAll, setAddAll] = useState(0);

  const handleAddAll = () => {
    addNewItem(
      ingredientFormatter(recipe.ingredients),
      savedItems,
      setSavedItems
    );
    setAddAll(1);
    toggleToast();
  };

  const handleLike = () => {
    if (!checkLiked(recipe)) {
      likeNewRecipe(recipe, savedRecipes, setSavedRecipes);
      setAddAll(0);
      setLike(true);
      toggleToast();
    } else {
      setSavedRecipes(
        savedRecipes.filter((elem) => recipe.instructions !== elem.instructions)
      );
      setAddAll(0);
      setLike(false);
      toggleToast();
    }
  };

  const checkLiked = (recipe) => {
    for (let i = 0; i < savedRecipes.length; i++)
      if (savedRecipes[i].instructions === recipe.instructions) return true;

    return false;
  };

  //Tooltips
  const likeToolTip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Save to Likes
    </Tooltip>
  );
  const addAllToolTip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add all ingredients
    </Tooltip>
  );

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
        {recipe.hasOwnProperty("servings") ? (
          <>
            <h3 className="lead text-primary fw-bold">Servings:</h3>
            {recipe.servings}
          </>
        ) : (
          <></>
        )}
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
              <HeartFill
                className={`${
                  checkLiked(recipe) ? "text-danger" : "text-secondary"
                }`}
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
              <PlusLg />
            </Button>
          </OverlayTrigger>
          <Toast
            show={showToast}
            onClose={toggleToast}
            style={{
              position: "absolute",
              translate: "0 100%",
            }}
          >
            <Toast.Header>
              <strong className="m-auto">
                {addAll === 1 ? "Added All" : like ? "Liked!" : "Unliked!"}
              </strong>
            </Toast.Header>
          </Toast>
        </Stack>
      </Card.Body>
    </Card>
  );
}
