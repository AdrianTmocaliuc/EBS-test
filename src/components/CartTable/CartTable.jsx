import React from 'react';

import { calculateTotalPrice } from 'assets/helpers';

import s from './CartTable.module.scss';

const CartTable = ({ cart, add, remove }) => {
  const totalPrice = cart ? calculateTotalPrice(cart) : 0;

  return (
    <>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr>
            <th className={s.category}>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={s.tableBody}>
          {cart?.map(({ id, name, category, price, quantity }) => {
            return (
              <tr key={id} className={s.product}>
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
        </tbody>
        <tfoot className={s.tableFoot}>
          <tr>
            <td colSpan="3">Total price:</td>

            <td colSpan="2">{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default CartTable;
