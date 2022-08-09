import React, { useCallback, useEffect, useState } from 'react';
import { getProducts } from 'services/FetchApi';
import Products from 'Pages/Products';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchReq = useCallback(async () => {
    const result = await getProducts();
    setProducts(result);
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
