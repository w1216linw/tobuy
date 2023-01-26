import { Container } from "react-bootstrap";
import { useAppContext } from "../context/AppContext";
import MasonryLayout from "../components/MasonryLayout";

export default function Likes() {

  const { savedRecipes, setSavedRecipes } = useAppContext();
  return (
    <Container>
      {
      savedRecipes.length < 1 ? 
        (
          <h1>No liked recipe</h1>
        )
        : <MasonryLayout recipes={savedRecipes} hasId={true}/>
      }
    </Container>
  )
}