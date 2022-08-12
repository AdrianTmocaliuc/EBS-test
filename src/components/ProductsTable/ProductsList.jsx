import React from 'react';

import s from './ProductsTable.module.scss';

const ProductsList = ({ list, add, remove }) => {
  return (
    <>
      {list?.map(({ id, category, name, price }) => {
        return (
          <tr key={id} className={s.product}>
            <td>{category.name}</td>
            <td className={s.name}>{name}</td>
            <td>{price}</td>
            <td data-id={id}>
              <span className={s.removeProduct} onClick={remove}>
                (-)
              </span>
              Action
              <span className={s.addProduct} onClick={add}>
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
