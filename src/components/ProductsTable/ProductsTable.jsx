import React, { useCallback, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import { getCategories } from 'services/FetchApi';
import useCloseModal from 'assets/hooks/useCloseModal';
import spriteSVG from 'assets/images/sprite.svg';
import ProductsList from './ProductsList';

import s from './ProductsTable.module.scss';

const ProductsTable = () => {
  const [categories, setCategories] = useState([]);
  const [sortPrice, setSortPrice] = useState(false);
  const [select, setSelect] = useState('Category');
  const [active, setActive] = useState(false);
  const [vectorDirection, setVectorDirection] = useState(false);

  let domNode = useCloseModal(() => setActive(false));

  const fetchReq = useCallback(async () => {
    const catList = await getCategories();
    setCategories(catList);
  }, []);

  useEffect(() => {
    fetchReq();
  }, [fetchReq]);

  return (
    <div>
      <h1 className={s.title}>Products</h1>
      <table className={s.table}>
        <thead className={s.columns}>
          <tr>
            <th className={s.category}>
              <div className={s.select} onClick={() => setActive(!active)}>
                <b>{select} </b>
                <svg className={active ? s.iconVectorUp : s.iconVectorDown}>
                  <use href={`${spriteSVG}#vector`}></use>
                </svg>
              </div>
              {active && (
                <div ref={domNode} className={s.selectors}>
                  {categories?.map(({ id, name }) => {
                    return (
                      <option
                        key={id}
                        className={s.categoryName}
                        onClick={() => {
                          setSelect(name);
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
            <th
              className={s.price}
              onClick={() => {
                setSortPrice(!sortPrice);
                setVectorDirection(!vectorDirection);
              }}
            >
              Price
              <svg className={vectorDirection ? s.iconVectorUp : s.iconVectorDown}>
                <use href={`${spriteSVG}#vector`}></use>
              </svg>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={s.products}>
          <ProductsList select={select} sortPrice={sortPrice} />
        </tbody>
      </table>
    </div>
  );
};

ProductsTable.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  sortPrice: PropTypes.bool,
  select: PropTypes.string,
  action: PropTypes.bool,
  vectorDirection: PropTypes.bool,
};

export default ProductsTable;
