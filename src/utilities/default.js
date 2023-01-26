import { v4 as uuidv4 } from "uuid";

export const defaultRecipes = [
  { 
    id: uuidv4(), 
    title: "Tomato fried egg",
    ingredients: "2 cups tomatoes|2 eggs|salt to taste|sugar to taste|1 tbs green onions", instructions: "First, stir the eggs and scramble them until they become solid. Put eggs aside, then scramble tomatoes til they become juicy. Then put the eggs in, add salt, sugar, and green onion. Wait for 20 seconds to serve."
  },
];

export const defaultItems = [
  {
    id: uuidv4(),
    name: '2 eggs'
  },
  {
    id: uuidv4(),
    name: '2 cups tomatoes'
  },
]