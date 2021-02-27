import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/hoc/Layout/Layout';
import Products from './pages/Products';
import News from './pages/News';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

import Home from './pages/home/home';

import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/products' component={Products} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
          <Route path='/cart' component={Checkout} />
          <Route path='/home' exact component={Home} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
