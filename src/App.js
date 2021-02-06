import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/home';
import Footer from './components/footer/footer'
import Products from './pages/Products';
import News from './pages/News';
import { Checkout } from './pages/Checkout';

import './styles/app.scss';

class App extends Component {
    render() {
        return (
            <main>
                <Home />
                <Footer />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/news" component={News} />
                    <Route path="/check-out" component={Checkout} />
                </Switch>
            </main>
        );
    }
}

export default App;
