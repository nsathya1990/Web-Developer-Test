import React from 'react';
import { Link, Switch, NavigationItem } from 'react-router-dom';

import Logo from '../Logo/Logo';

import classes from './header.module.scss';

const Header = () => (
  <header className={classes.TopBar}>
    <Link to='/home' className={classes.Logo}>
      <Logo />
    </Link>
    <div className={classes.Menu}>
      <ul>
        <NavigationItem to='/products'>Products</NavigationItem>
        <NavigationItem href='#'>News</NavigationItem>
        <NavigationItem href='#'>Contact</NavigationItem>
        <NavigationItem href='#'>Cart</NavigationItem>
      </ul>
    </div>
  </header>
);

export default Header;
