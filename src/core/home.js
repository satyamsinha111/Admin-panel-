import React, { useState,useEffect } from 'react';
import Base from './base';
import Header from './header';
import Footer from './footer';
import Body from './body';
import Signin from '../Authentication/Signin';
import Signup from '../Authentication/Signup';

function Home(props) {

    // let [toggler,setToggler]=useState(false)

    // let handleToggler = ()=>{
    //     setToggler(!toggler)
    // }

    // useEffect(handleToggler,[toggler])

    return (
        <div>
            <Header />
            <Body />
            <Footer/>
        </div>

    );
}

export default Home;