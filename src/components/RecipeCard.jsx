import { Card, Button, Stack, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Ingredient from "./Ingredient";
import { HeartFill, PlusLg } from "react-bootstrap-icons";
import { addNewItem } from "../utilities/addNewItem";
import { useAppContext } from "../context/AppContext";

export default function RecipeCard({ recipe }) {

  const { savedRecipes, setSavedRecipes } = useAppContext();

  const handleAddAll = () => {
    
  }

  const checkLiked = (recipe) => {
    return 'id' in recipe;
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
            <Button variant="outline-secondary">
              <HeartFill className={`${checkLiked(recipe) ? 'text-danger' : 'text-secondary'}`}
              />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 150, hide: 150 }}
            overlay={addAllToolTip}
          >
          <Button variant="warning"><PlusLg/></Button>
          </OverlayTrigger>
        </Stack>
      </Card.Body>
    </Card>
  );
}
