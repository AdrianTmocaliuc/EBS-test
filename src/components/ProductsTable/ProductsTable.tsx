import React from 'react';

import s from './ProductsTable.module.scss';

interface Category {
  id: string;
  name: string;
}

interface Item {
  map: any;
  id: number;
  category: Category;
  name: string;
  price: number;
}

interface Props {
  items: Item;
  select: object;
}

const ProductsTable = ({ items , select}:Props) => {
  // const handleClick = ({currentTarget}: any) => {
  //   console.log(currentTarget.parentNode.className)
  // }
  return  <>
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
                {items?.map(({ id, category, name, price }: Item) => {
                  return (
                    <tr key={id} className={category.id}>
                      <td>{category.name}</td>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td onClick={()=>select}>(-) Action (+)</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
};

export default ProductsTable;
