import React from 'react';

import s from './ProductsTable.module.scss';

const ProductsTable = ({ products, add, remove }) => {
  return (
    <>
      <h2>Products</h2>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map(({ id, category, name, price }) => {
            return (
              <tr key={id} className={category.id}>
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
        </tbody>
      </table>
    </>
  );
};

export default ProductsTable;
