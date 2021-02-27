import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import Footer from '../../Footer/Footer';

import classes from './Layout.module.scss';

class Layout extends Component {
  render() {
    return (
      <Auxiliary>
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
        <Footer />
      </Auxiliary>
    );
  }
}

export default Layout;
