import React from 'react';

import classes from './NavigationItems.module.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>{/* 
    <NavigationItem link='/' exact>
      Home
    </NavigationItem> */}
    <NavigationItem link='/products'>Products</NavigationItem>
    <NavigationItem link='/news'>News</NavigationItem>
    <NavigationItem link='/contact'>Contact</NavigationItem>
    <NavigationItem link='/cart'>Cart</NavigationItem>
  </ul>
);

export default navigationItems;
