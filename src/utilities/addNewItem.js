import {v4 as uuidv4} from 'uuid';

const addNewItem = (value, arr, fn) => {
  const newItem = { id: uuidv4(), name: value};
  fn([...arr, newItem]);
}

export { addNewItem };