import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGooglePlusG,
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import Logo from '../Logo/Logo';

import classes from './Footer.module.scss';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

const Footer = () => (
  <footer>
    <div className={classes.FtLogo}>
      <Logo />
    </div>
    <div className={classes.FtMenu}>
      <ul>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/news'>News</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>Your Cart</NavLink>
        </li>
      </ul>
    </div>
    <div className={classes.FtSocialLegal}>
      <div className={classes.Social}>
        <ul>
          <li onClick={() => openInNewTab('https://www.google.com')}>
            <FontAwesomeIcon icon={faGooglePlusG} />
          </li>
          <li onClick={() => openInNewTab('https://www.facebook.com')}>
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li onClick={() => openInNewTab('https://www.instagram.com')}>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li onClick={() => openInNewTab('https://www.twitter.com')}>
            <FontAwesomeIcon icon={faTwitter} />
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
