import React, { useCallback, useEffect, useState } from 'react';
import { getCategories } from 'services/FetchApi';
import productsByCategory from 'utils/productsByCategory';
import sortByPrice from 'utils/sortByPrice';

import s from './ProductsTable.module.scss';

const ProductsTable = ({ products, add, remove }) => {
  const [categories, setCategories] = useState([]);
  const [sortPrice, setSortPrice] = useState(false);
  const [select, setSelect] = useState('Category');
  const [active, setActive] = useState(false);

  const filterProducts = productsByCategory(products, select);
  const sortProducts = sortByPrice(filterProducts, sortPrice);

  const fetchReq = useCallback(async () => {
    const catList = await getCategories();
    setCategories(catList);
  }, []);

  useEffect(() => {
    fetchReq();
  }, [fetchReq]);

  return (
    <>
      <h2>Products</h2>
      <table className={s.table}>
        <thead>
          <tr>
            <th>
              <div className={s.select} onClick={() => setActive(true)}>
                <b>{select}</b>
              </div>
              {active && (
                <div className={s.selectors}>
                  {categories?.map(({ id, name }) => {
                    return (
                      <option
                        key={id}
                        className={s.category}
                        onClick={() => {
                          setSelect(id);
                          setActive(false);
                        }}
                      >
                        {name}
                      </option>
                    );
                  })}
                </div>
              )}
            </th>
            <th>Name</th>
            <th onClick={() => setSortPrice(!sortPrice)}>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortProducts?.map(({ id, category, name, price }) => {
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
