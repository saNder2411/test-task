import React from 'react';
import {List, ListItemText} from '@material-ui/core';

import ArticleItem from '../article-item/article-item';


const ArticleList = ({articles}) => {
  console.log(articles)

  const items = articles.map((article, idx) => (
    <ListItemText key={`${article.title}${idx}`}>
      <ArticleItem {...article} />
    </ListItemText>
  ))

  return (
    <List>
      {items}
    </List>
  );
};

export default ArticleList;