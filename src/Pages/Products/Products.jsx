import React from 'react';
import { Link } from 'react-router-dom';

import ProductsTable from 'components/ProductsTable';
import { calculateTotalProducts } from 'assets/helpers';
import spriteSVG from 'assets/images/sprite.svg';
import { useProducts } from 'components/ProductsContext/ProductsContext';

import s from './Products.module.scss';

const Products = () => {
  const { cart } = useProducts();

  const productsQuantity = cart ? calculateTotalProducts(cart) : 0;
  return (
    <>
      <div className={s.products}>
        <ProductsTable />
        <Link to="/cart">
          <div className={s.cart}>
            <svg className={s.iconCart}>
              <use href={`${spriteSVG}#cart`}></use>
            </svg>
            <div className={s.productsQuantity}>
              <p>{productsQuantity}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Products;
