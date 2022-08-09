import ProductsTable from 'components/ProductsTable';
import React, { useCallback, useEffect, useState } from 'react';

import s from './Products.module.scss';
import { getProducts } from './../../services/FetchApi';
import CartTable from 'components/CartTable';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchReq = useCallback(async () => {
    const result = await getProducts();
    setProducts(result);
  }, []);

  useEffect(() => {
    fetchReq();
  }, [fetchReq]);

  const handleClick = ({ currentTarget }) => {
    console.log(currentTarget.parentNode.className);
  };

  return (
    <div className={s.products}>
      <ProductsTable items={products} select={handleClick} />
      <CartTable />
    </div>
  );
};

export default Products;
