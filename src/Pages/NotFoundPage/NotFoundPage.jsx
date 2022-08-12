import React from 'react';
import { Link } from 'react-router-dom';

import spriteSVG from 'assets/images/sprite.svg';

import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
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
      <div className={s.notFound}>
        <h1 className={s.notFoundText}>Page not found !</h1>
      </div>
    </>
  );
};

export default NotFoundPage;
