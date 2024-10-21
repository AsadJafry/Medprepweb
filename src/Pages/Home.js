import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Navbar2 from '../Components/Navbar/Navbar2';

function Home(props) {
    return (
        <div>
            <Navbar2/>
            <Navbar/>
            Home
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        </div>
    );
}

export default Home;