import {v4 as uuidv4} from 'uuid';

const addNewItem = (value, arr, fn) => {
  if( typeof value === 'object') {
    const newArr = value.map(elem => ({id: uuidv4(), name: elem}));
    fn([...arr, ...newArr]);
  } else {
    const newItem = { id: uuidv4(), name: value};
    fn([...arr, newItem]);
  }
}

const likeNewRecipe = (recipes, arr, fn) => {
  const newItem = { id: uuidv4(), ...recipes};
  fn([...arr, newItem]);
}

export { addNewItem, likeNewRecipe };