import React from 'react';
import './App.css';

import { Footer, Header, Blog, Possibility, Features, WhatGPT3  } from './containers';
import { Navbar, Article, Brand, CTA } from './components';

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

export default App;