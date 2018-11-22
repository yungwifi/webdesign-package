import React, { Component } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import ItemsList from './ItemsList';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Hero />
                <ItemsList />
            </div>
        );
    }
}

export default HomePage;