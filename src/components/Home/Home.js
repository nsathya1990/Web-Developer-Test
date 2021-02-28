import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './home.module.scss';

import Button from '../UI/Button/Button';

const Home = () => (
  <div>
    <div className={classes.Banner}>
      <div className={classes.BannerText}>
        <div className={classes.BannerTextItems}>
          <h4>APPS unveils new studio</h4>
          <p className={classes.BannerTextTitle}>Lagom</p>
        </div>
      </div>
    </div>
    <div className={classes.MainContent}>
      <div className={classes.Main1}>
        <h2>Innovation and experience design agency.</h2>
        <p>
          Lorem Ipsum is simply dummysk text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <NavLink to='/products'>
          <Button>Products</Button>
        </NavLink>
      </div>
      <div className={classes.Main1}>
        <h2>The imaginative application of art and science.</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <NavLink to='/news'>
          <Button>Read Latest</Button>
        </NavLink>
      </div>
    </div>
  </div>
);

export default Home;
