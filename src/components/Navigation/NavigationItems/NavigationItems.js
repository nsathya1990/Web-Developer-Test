import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import classes from './NavigationItems.module.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/products'>Products</NavigationItem>
    <NavigationItem link='/news'>News</NavigationItem>
    <NavigationItem link='/contact'>Contact</NavigationItem>
    <NavigationItem link='/cart'>
    <FontAwesomeIcon icon={faShoppingBasket} title="Checkout" />
    </NavigationItem>
  </ul>
);

export default navigationItems;
