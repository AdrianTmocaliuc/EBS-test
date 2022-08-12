import CartPage from 'pages/Cart/CartPage';
import NotFoundPage from 'pages/NotFoundPage';
import ProductsPage from 'pages/ProductsPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from './Container';

const App = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <ProductsPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </Container>
  );
};

export default App;
