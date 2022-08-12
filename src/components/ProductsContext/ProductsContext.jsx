import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getProducts } from 'services/FetchApi';
import { PropTypes } from 'prop-types';

import useLocalStorage from 'assets/hooks/useLocalStorage';
import { productQuantity, selectedElements } from 'assets/helpers';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
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

  return (
    <ProductsContext.Provider value={{ products, cart, addClick, removeClick }}>{children}</ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      category: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  addClick: PropTypes.func,
  removeClick: PropTypes.func,
};
