import React from 'react';
import { render } from 'react-dom';

import App from 'components/App';
import 'assets/scss/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from 'components/ProductsContext/ProductsContext';

render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
  document.getElementById('root'),
);
