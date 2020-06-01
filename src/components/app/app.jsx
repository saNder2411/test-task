import React from 'react';
import {Container} from '@material-ui/core';
import ArticleListContainer from '../../containers/article-list-container/article-list-container';


const App = () => {

  return (
    <Container maxWidth="md">
      <h1>News Articles</h1>
      <ArticleListContainer />
    </Container>
  );
};


export default App;