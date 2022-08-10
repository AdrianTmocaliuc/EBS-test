import React, { useCallback, useEffect, useState } from 'react';
import { getProducts } from 'services/FetchApi';
import Products from 'pages/Products';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchReq = useCallback(async () => {
    const prodList = await getProducts();
    setProducts(prodList);
  }, []);

  useEffect(() => {
    fetchReq();
  }, [fetchReq]);

  return (
    <>
      <Products products={products} />
    </>
  );
};

export default App;
