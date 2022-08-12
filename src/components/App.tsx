import CartPage from 'pages/Cart/CartPage';
import Products from 'pages/Products';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from './Container';

const App = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route>
          <Products />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
