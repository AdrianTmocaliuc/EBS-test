import { productsByCategory, sortByPrice } from 'assets/helpers';
import { useProducts } from 'components/ProductsContext/ProductsContext';
import React from 'react';

import s from './ProductsTable.module.scss';

const ProductsList = ({ select, sortPrice }) => {
  const { products, addClick, removeClick } = useProducts();

  const filterProducts = productsByCategory(products, select);
  const sortProducts = sortByPrice(filterProducts, sortPrice);
  return (
    <>
      {sortProducts?.map(({ id, category, name, price }) => {
        return (
          <tr key={id} className={s.product}>
            <td>{category.name}</td>
            <td className={s.name}>{name}</td>
            <td>{price}</td>
            <td data-id={id}>
              <span className={s.removeProduct} onClick={removeClick}>
                (-)
              </span>
              Action
              <span className={s.addProduct} onClick={addClick}>
                (+)
              </span>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ProductsList;
