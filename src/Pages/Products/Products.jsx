import ProductsTable from 'components/ProductsTable';
import React, { useEffect, useState } from 'react';

import s from './Products.module.scss';
import CartTable from 'components/CartTable';

const Products = ({ products }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    let localMemory = localStorage.getItem('cart');
    if (localMemory) {
      setCart([...JSON.parse(localMemory)]);
    }
  }, []);

  const addClick = ({ currentTarget }) => {
    const addProduct = products.find((el) => el.id === +currentTarget.parentNode.dataset.id);
    const carts = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...carts, addProduct]));
    setCart([...carts, addProduct]);
  };

  const removeClick = ({ currentTarget }) => {
    const removeProduct = cart.find((el) => el.id === +currentTarget.parentNode.dataset.id);

    if (!removeProduct) {
      return console.log('Not found');
    }
    const filterCart = cart.filter((elem) => elem.id !== removeProduct.id);

    localStorage.setItem('cart', JSON.stringify(filterCart));
    setCart(filterCart);
  };

  return (
    <div className={s.products}>
      <ProductsTable products={products} add={addClick} remove={removeClick} />
      <CartTable cart={cart} />
    </div>
  );
};

export default Products;
