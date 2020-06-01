import React from 'react';
import {Button, Container} from '@material-ui/core';


const App = ({articlesState}: {articlesState: Array<{}>}) => {
  console.log(articlesState)

  return (
    <Container maxWidth="sm">
      <Button color="primary">Hello World</Button>
    </Container>
  );
};


export default App;