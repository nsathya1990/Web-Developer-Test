import React from 'react';
import { Link } from 'react-router-dom';

import classes from './logo.module.scss';

const Logo = () => (
    <Link to="/home" className={classes.Logo}>
        Apps
    </Link>
);

export default Logo;