import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/hoc/Layout/Layout';
import Checkout from './components/Checkout/Checkout';
import InProgress from './components/InProgress/InProgress';

import Home from './components/Home/Home';

import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/products' component={InProgress} />
          <Route path='/news' component={InProgress} />
          <Route path='/contact' component={InProgress} />
          <Route path='/cart' component={Checkout} />
          <Route path='/home' component={Home} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
