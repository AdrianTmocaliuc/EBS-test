import ProductsTable from 'components/ProductsTable';
import React, { useEffect, useState } from 'react';

import s from './Products.module.scss';
import CartTable from 'components/CartTable';
import productQuantity from 'utils/productQuantity';

const Products = ({ products }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let localMemory = localStorage.getItem('cart');
    if (localMemory) {
      setCart([...JSON.parse(localMemory)]);
    }
  }, []);

  const addClick = ({ currentTarget }) => {
    const selectedId = +currentTarget.parentNode.dataset.id;
    const addProduct = products.find((el) => el.id === selectedId);

    if (cart.find((el) => el.id === addProduct.id)) {
      const updateCart = productQuantity(cart, addProduct);

      localStorage.setItem('cart', JSON.stringify([...updateCart]));
      setCart([...updateCart]);

      return console.log('Add product');
    }
    addProduct.quantity = 1;
    localStorage.setItem('cart', JSON.stringify([...cart, addProduct]));
    setCart([...cart, addProduct]);
  };

  const removeClick = ({ currentTarget }) => {
    const selectedId = +currentTarget.parentNode.dataset.id;
    const removeProduct = cart.find((el) => el.id === selectedId);

    if (!removeProduct) {
      return console.log('Not found');
    }

    const updateCart = productQuantity(cart, removeProduct, true);
    localStorage.setItem('cart', JSON.stringify([...updateCart]));
    setCart([...updateCart]);
  };

  return (
    <div className={s.products}>
      <ProductsTable products={products} add={addClick} remove={removeClick} />
      <CartTable cart={cart} add={addClick} remove={removeClick} />
    </div>
  );
};

export default Products;
