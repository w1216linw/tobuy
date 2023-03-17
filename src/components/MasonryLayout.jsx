import Masonry from "react-masonry-css";
import RecipeCard from "./RecipeCard";

export default function MasonryLayout({ recipes, hasId }) {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {hasId
        ? recipes.map((item) => {
            return <RecipeCard key={item.id} recipe={item} />;
          })
        : recipes.map((item, index) => {
            return <RecipeCard key={index} recipe={item} />;
          })}
    </Masonry>
  );
}
