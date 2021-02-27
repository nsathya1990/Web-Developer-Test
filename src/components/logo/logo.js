import React from 'react';

import classes from './Logo.module.scss';

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <h3>Apps</h3>
  </div>
);

export default logo;
