import React from 'react';

import s from './Table.module.scss';

interface Category{
  id: string,
  name: string,
}

interface Item{
  id: number,
  category: Category,
  name: string,
  price: number
}

const List = ({ items=[], cart=[] }) => {
  console.log(items);
  return (
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
            <tr key={id}>
              <td>{category.name}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>(-) Action (+)</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
