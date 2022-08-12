import { productQuantity, selectedElements } from 'assets/helpers';
import useLocalStorage from 'assets/hooks/useLocalStorage';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getProducts } from 'services/FetchApi';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage();
  const [products, setProducts] = useState([]);
  console.log(products);

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
