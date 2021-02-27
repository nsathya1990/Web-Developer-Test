import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo/logo';

import classes from './header.module.scss';

const Header = () => (
  <header className={classes.TopBar}>
    <Link to='/home' className={classes.Logo}>
      <Logo />
    </Link>
    <div className={classes.Menu}>
      <ul>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <a href='#'>News</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <li>
          <a href='#'>Cart</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
