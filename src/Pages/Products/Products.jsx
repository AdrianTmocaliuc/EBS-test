import React, { useCallback, useEffect, useState } from 'react';

import ProductsTable from 'components/ProductsTable';
// import CartTable from 'components/CartTable';
import { productQuantity, selectedElements, calculateTotalProducts } from 'assets/helpers';
import useLocalStorage from 'assets/hooks/useLocalStorage';
// import Container from 'components/Container';
import spriteSVG from 'assets/images/sprite.svg';

import s from './Products.module.scss';
import { getProducts } from 'services/FetchApi';
import { Link } from 'react-router-dom';

const Products = () => {
  const [cart, setCart] = useLocalStorage();
  const [products, setProducts] = useState([]);

  const fetchReq = useCallback(async () => {
    const prodList = await getProducts();
    setProducts(prodList);
  }, []);

  useEffect(() => {
    fetchReq();
  }, [fetchReq]);

  const addClick = ({ currentTarget }) => {
    const addProduct = selectedElements(products, currentTarget);

    if (cart.find((el) => el.id === addProduct.id)) {
      const updateCart = productQuantity(cart, addProduct);

      setCart([...updateCart]);

      return console.log('Product add');
    }
    addProduct.quantity = 1;
    setCart([...cart, addProduct]);
  };

  const removeClick = ({ currentTarget }) => {
    const removeProduct = selectedElements(cart, currentTarget);

    if (!removeProduct) {
      return console.log('Not found');
    }

    const updateCart = productQuantity(cart, removeProduct, true);
    setCart([...updateCart]);
  };

  const productsQuantity = calculateTotalProducts(cart);
  return (
    <>
      <div className={s.products}>
        <ProductsTable products={products} add={addClick} remove={removeClick} />
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
      {/* <CartTable cart={cart} add={addClick} remove={removeClick} /> */}
    </>
  );
};

export default Products;
