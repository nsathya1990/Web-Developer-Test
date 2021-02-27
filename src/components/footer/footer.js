import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

import classes from './footer.module.scss';

const Footer = () => (
    <footer>
        <div className={classes.FtLogo}>
            <Logo />
        </div>
        <div className={classes.FtMenu}>
            <ul>
                <li><Link to="/products">Products</Link></li>
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
);

export default Footer;