import React, {createContext, useReducer} from 'react';
import reducer from './reducer';


const initialState = {
  isLoadingArticles: false,
  articlesData: null,
  articlesError: null,
};

const ArticlesContext = createContext();

const ArticlesProvider = ({children}) => {

  const value = useReducer(reducer, initialState);

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
};

export {ArticlesContext, ArticlesProvider};