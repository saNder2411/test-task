import React, {useEffect, useContext} from 'react';

import useService from '../../hooks/useService/use-service';
import {ArticlesContext} from '../../contexts/articles-context/articles-context';
import {articlesRequest, articlesLoaded, articlesHasError} from '../../contexts/articles-context/action-creators';

import App from '../../components/app/app';


const ARTICLES_URL = `f971f32593184524bd7b55bc1c144cbe`;

const AppContainer = () => {

  const [{isLoadingArticles, articlesData, articlesError}, dispatch] = useContext(ArticlesContext);
  const [{data, error}, doRequest] = useService(ARTICLES_URL);

  useEffect(() => {
    dispatch(articlesRequest());
    doRequest();
  }, [doRequest, dispatch]);

  useEffect(() => {
    if (!data) return;

    dispatch(articlesLoaded(data));
  }, [data, dispatch]);

  useEffect(() => {
    if (!error) return;

    dispatch(articlesHasError(error));
  }, [error, dispatch]);


  const hasData = !(isLoadingArticles || articlesError) && articlesData;

  if (articlesError) {
    return (
      <div className="loader">
        <h2>Something is wrong!</h2>
      </div>
    );
  }

  if (isLoadingArticles) {
    return (
      <div className="loader">
        <h2>Loading ...</h2>
      </div>
    );
  }

  return !hasData ? null : (
    <App
      articlesState={articlesData}/>
  );
};

export default AppContainer;
