import React from 'react';
import { Link } from 'react-router-dom';

import classes from './home.module.scss';

import Logo from '../../components/logo/logo';

const Home = () => (
    <div>
        <div className={classes.TopBar}>
            <Link to="/home" className={classes.Logo}><Logo /></Link>
            <div className={classes.Menu}>
                <ul>
                    <li><Link to="/products">Products</Link></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
        <div className={classes.Banner}>
            <div className={classes.BannerText}>
                <div className={classes.BannerTextItems}>
                    <h2>Banner Text Heading</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
        <div className={classes.MainContent}>
            <div className={classes.Main1}>
                <h2>Main Heading One</h2>
                <p>Lorem Ipsum is simply dummysk text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className={classes.Main1}>
                <h2>Main Heading Two</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className={classes.Main1}>
                <h2>Main Heading Three</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
    </div>
);

export default Home;
