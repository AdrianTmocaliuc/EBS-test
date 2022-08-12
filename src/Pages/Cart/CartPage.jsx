import React from 'react';
import { Link } from 'react-router-dom';

import CartTable from 'components/CartTable';
import spriteSVG from 'assets/images/sprite.svg';

import s from './CartPage.module.scss';

const CartPage = () => {
  return (
    <>
      <Link to="/">
        <button className={s.backButton}>
          <svg className={s.iconVector}>
            <use href={`${spriteSVG}#vector`}></use>
          </svg>
          <p className={s.btnText}>Back to products</p>
        </button>
      </Link>
      <CartTable />
    </>
  );
};

export default CartPage;
