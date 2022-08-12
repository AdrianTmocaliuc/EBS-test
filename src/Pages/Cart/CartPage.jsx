import CartTable from 'components/CartTable';
import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <>
      <h1>Cart Page</h1>
      <Link to="/">
        <button> Products</button>
      </Link>
      <CartTable />
    </>
  );
};

export default CartPage;
