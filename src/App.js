import React, { Component } from 'react';

import Home from './pages/home/home';
import Footer from './components/footer/footer';

import './styles/app.scss';

class App extends Component {
    render() {
        return (
            <main>
                <Home />
                <Footer />
            </main>
        );
    }
}

export default App;
