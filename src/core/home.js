import React from 'react';
import Base from './base';
import Header from './header';
import Footer from './footer';
import Body from './body';

function home(props) {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default home;