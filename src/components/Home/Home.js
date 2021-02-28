import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Home.module.scss';
import Footer from '../Footer/Footer';

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
      <article className={classes.Main1}>
        <header>Innovation and experience design agency.</header>
        <p>
          Apps is an innovation and experience design agency. We exist to create
          a better future with you.
        </p>
        <NavLink to='/products'>
          <Button>Products</Button>
        </NavLink>
      </article>
      <article className={classes.Main2}>
        <div className={classes.Main2Banner}></div>
        <div className={classes.Main2Content}>
          <header>The imaginative application of art and science.</header>
          <p>
            We architect, design and deliver iconic experiences, services and
            products that improve people's lives
          </p>
          <NavLink to='/news'>
            <Button>Read Latest</Button>
          </NavLink>
        </div>
      </article>
    </div>
    <Footer />
  </div>
);

export default Home;
