import React from 'react';
import ReactDOM from 'react-dom';

import {ArticlesProvider} from './contexts/articles-context/articles-context';
import AppContainer from './containers/app-container/app-container';


ReactDOM.render(
  <ArticlesProvider>
    <AppContainer />
  </ArticlesProvider>,
  document.getElementById('root')
);

