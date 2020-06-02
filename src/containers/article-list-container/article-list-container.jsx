import React, {useEffect, useContext} from 'react';

import useService from '../../hooks/useService/use-service';
import {ArticlesContext} from '../../contexts/articles-context/articles-context';
import {articlesRequest, articlesLoaded, articlesHasError} from '../../contexts/articles-context/action-creators';

import ArticleList from '../../components/article-list/article-list';
import {getDateForService} from '../../utils/utils';

const serviceDate = getDateForService();


const ARTICLES_URL = `/everything?q=bitcoin&from=${serviceDate}&sortBy=publishedAt&apiKey=f971f32593184524bd7b55bc1c144cbe`;

const ArticleListContainer = () => {

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
      <div>
        <h2>Something is wrong!</h2>
      </div>
    );
  }

  if (isLoadingArticles) {
    return (
      <div>
        <h2>Loading ...</h2>
      </div>
    );
  }

  return !hasData ? null : (
    <ArticleList articles={articlesData.articles}/>
  );
};

export default ArticleListContainer;
