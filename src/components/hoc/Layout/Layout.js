import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../Navigation/Toolbar/Toolbar';

import classes from './Layout.module.scss';

class Layout extends Component {
  render() {
    return (
      <Auxiliary>
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
