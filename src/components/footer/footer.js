import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGooglePlusG,
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import Logo from '../Logo/Logo';

import classes from './footer.module.scss';

const Footer = () => (
  <footer>
    <div className={classes.FtLogo}>
      <Logo />
    </div>
    <div className={classes.FtMenu}>
      <ul>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <a href='#'>News</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <li>
          <a href='#'>Your Cart</a>
        </li>
      </ul>
    </div>
    <div className={classes.FtSocialLegal}>
      <div className={classes.Social}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGooglePlusG} size='lg' />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebookF} size='lg' />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} size='lg' />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} size='lg' />
          </li>
        </ul>
      </div>
      <div className={classes.Legal}>
        <ul>
          <li className={classes.PrivacyPolicy}>
            <a href='#'>Privacy Policy</a>
          </li>
          <li className={classes.Copyrights}>
            © 2021 Google. All Rights Reserved
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
