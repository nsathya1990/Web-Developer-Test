import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Home } from './pages/home/home';
import { Products } from './pages/Products';
import { News } from './pages/News';
import { Checkout } from './pages/Checkout';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/news">News</Link>
                            </li>
                            <li>
                                <Link to="/check-out">Checkout</Link>
                            </li>
                            <li>
                                <Link to="/news">News</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/check-out">
                            <Checkout />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
