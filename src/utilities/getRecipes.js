import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
  params: {query: 'chinese'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
  }
};

const getRecipes = async (options) => {
  const response = await axios.request(options);
  return response.data;
}

const setOptions = (query) => {
  return {...options, params: {query: query}}
}

export {setOptions, getRecipes}