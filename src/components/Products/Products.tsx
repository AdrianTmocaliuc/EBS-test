import React, { useCallback, useEffect, useState } from 'react';

import s from './Products.module.scss';
import { getProducts } from './../../services/FetchApi';
import Table from 'components/Table';


const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchReq = useCallback(async () => {
    const result = await getProducts();
    setProducts(result);
  }, []);

  useEffect(() => {
    fetchReq();
  }, [fetchReq]);
    

  return (
    <div>
      <h1 className={s.prod}>Products</h1>
          <Table items={ products} />
    </div>
  );
};

export default Products;
