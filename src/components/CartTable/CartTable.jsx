import React from 'react';

import { calculateTotalPrice } from 'assets/helpers';

import s from './CartTable.module.scss';

const CartTable = ({ cart, add, remove }) => {
  const totalPrice = calculateTotalPrice(cart);

  return (
    <>
      <h2 className={s.title}>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, name, category, price, quantity }) => {
            return (
              <tr key={id}>
                <td>{category.name}</td>
                <td>{name}</td>
                <td>{quantity}</td>
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
          <tr>
            <td className={s.totalPrice}>Total price:</td>
            <td></td>
            <td></td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CartTable;
