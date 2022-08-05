import React, { useCallback, useEffect, useState } from 'react';

import s from './Products.module.scss';
import { getProducts } from './../../services/FetchApi';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchReq = useCallback(async () => {
    const result = await getProducts();
    setProducts(result);
  }, []);

  useEffect(() => {
    fetchReq();
  }, [fetchReq]);

  console.log(products);

  return (
    <div>
      <h1 className={s.prod}>Products</h1>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
