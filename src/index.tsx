import React from 'react';
import ReactDOM from 'react-dom';

import {ArticlesProvider} from './contexts/articles-context/articles-context';
import App from './components/app/app';


ReactDOM.render(
  <ArticlesProvider>
    <App />
  </ArticlesProvider>,
  document.getElementById('root')
);

