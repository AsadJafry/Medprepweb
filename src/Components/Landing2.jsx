import React from 'react';
import HeroSection from './Hero';
import Navbar2 from './Navbar/Navbar2';
import Featured from './Featured';
import Footer from './Footer';

function Landing2(props) {
    return (
        <div >
            <Navbar2/>
            <HeroSection/>
            <Featured/>
            <div className='absolute bottom-0 w-full' >

            <Footer/>
            </div>
        </div>
    );
}

export default Landing2;