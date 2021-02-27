import React, { Component } from 'react';

import Home from './pages/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import './styles/app.scss';

class App extends Component {
    render() {
        return (
            <main>
                <Header />
                <Home />
                <Footer />
            </main>
        );
    }
}

export default App;
