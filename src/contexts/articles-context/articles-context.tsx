import React, {createContext, useReducer} from 'react';
import reducer from './reducer';


const initialState = {
  isLoadingArticles: false,
  articlesData: null,
  articlesError: null,
};

const context = [initialState, () => {}]

const ArticlesContext = createContext(context);

const ArticlesProvider = ({children}: {children: any}) => {

  const value = useReducer(reducer, initialState);

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
};

export {ArticlesContext, ArticlesProvider};