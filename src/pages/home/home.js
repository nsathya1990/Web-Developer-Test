import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import classes from './home.module.scss';

import Logo from '../../components/logo/logo';
import Products from '../Products';

export const Home = () => (
    <Router>
        <Route path="/products" component={Products} />
        <div className={classes.TopBar}>
            <Link to="/news" className={classes.Logo}><Logo /></Link>
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
        <footer>
            <Link to="/news" className={classes.Logo}><Logo /></Link>
            <div className={classes.FtMenu}>
                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Your Cart</a></li>
                </ul>
            </div >
            <div className={classes.FtSocialLegal}>
                <div className={classes.Social}>
                    <ul>
                        <li><i className="fab fa-google-plus-g fa-lg"></i></li>
                        <li><i className="fab fa-facebook-f fa-lg"></i></li>
                        <li><i className="fab fa-instagram fa-lg"></i></li>
                        <li><i className="fab fa-twitter fa-lg"></i></li>
                    </ul>
                </div>
                <div className={classes.Legal}>
                    <ul>
                        <li className={classes.PrivacyPolicy}><a href="#">Privacy Policy</a></li>
                        <li className={classes.Copyrights}>© 2021 Google. All Rights Reserved</li>
                    </ul>
                </div>
            </div>
        </footer>
        
    </Router>
);