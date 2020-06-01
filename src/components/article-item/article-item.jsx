import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ArticleItem  = ({author, content, description, publishedAt, title, urlToImage}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <CardMedia
          component="img"
          alt="Image"
          height="340"
          image={urlToImage}
          title="Contemplative Reptile"
        />
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
          <br />
          {author}
          <br />
          {publishedAt}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ArticleItem;