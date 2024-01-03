import React from 'react';

import {Blog, Possibility, Features, WhatGPT3, Header, Footer} from './containers';
import {CTA, Brand, Navbar } from './components';
import './App.css';
// import { Article, Brand, CTA, Feature, Navbar } from './components';


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App