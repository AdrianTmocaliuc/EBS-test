import ProductsTable from 'components/ProductsTable';
import React from 'react';

import s from './Products.module.scss';
import CartTable from 'components/CartTable';
import productQuantity from 'utils/productQuantity';
import selectedElements from 'utils/selectedElements';
import useLocalStorage from 'utils/hooks/useLocalStorage';

const Products = ({ products }) => {
  const [cart, setCart] = useLocalStorage();

  const addClick = ({ currentTarget }) => {
    const addProduct = selectedElements(products, currentTarget);

    if (cart.find((el) => el.id === addProduct.id)) {
      const updateCart = productQuantity(cart, addProduct);

      setCart([...updateCart]);

      return console.log('Add product');
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

  return (
    <div className={s.products}>
      <ProductsTable products={products} add={addClick} remove={removeClick} />
      <CartTable cart={cart} add={addClick} remove={removeClick} />
    </div>
  );
};

export default Products;
