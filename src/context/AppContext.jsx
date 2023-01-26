import React, { useContext, useEffect, useState } from "react";
import {defaultRecipes, defaultItems } from '../utilities/default';

const AppContext = React.createContext();

const AppContextProvider = ({children}) => {

  const [searchedRecipes, setSearchedRecipes] = useState();

  //fetch local items if they is one at start of application
  const [savedRecipes, setSavedRecipes] = useState(JSON.parse(localStorage.getItem('localRecipes')) ?? defaultRecipes);
  const [savedItems, setSavedItems] = useState(JSON.parse(localStorage.getItem('localItems')) ?? defaultItems);

  // auto save recipes to local
  useEffect(() => {
    localStorage.setItem('localRecipes', JSON.stringify(savedRecipes));
  }, [savedRecipes])
  
  // auto save items to local
  useEffect(() => {
    localStorage.setItem('localItems', JSON.stringify(savedItems));
  }, [savedItems])

  return (
    <AppContext.Provider value={{savedRecipes, setSavedRecipes, savedItems, setSavedItems, searchedRecipes, setSearchedRecipes}}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { AppContextProvider, useAppContext }