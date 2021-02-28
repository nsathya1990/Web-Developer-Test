import React from 'react';

import classes from './DrawerToggle.module.scss';

const drawerToggle = (props) => (
  <div className={classes.DrawerToggleP} onClick={props.clicked}>
    <div className={classes.MenuText}>MENU</div>
    <div className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default drawerToggle;
