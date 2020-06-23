import React, { useState } from 'react';
import Base from './base';
import Header from './header';
import Footer from './footer';
import Body from './body';
import Signin from '../Authentication/Signin';
import Signup from '../Authentication/Signup';

function Home(props) {
    return (
        <div>
            <Header/>
            <Body />
            <Footer/>
        </div>

    );
}

export default Home;