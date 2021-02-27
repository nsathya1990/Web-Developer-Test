import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.module.scss';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <NavLink to='/home' className={classes.Logo}>
      <Logo />
    </NavLink>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
    <DrawerToggle clicked={props.drawerToggleClicked} />
  </header>
);

export default toolbar;
