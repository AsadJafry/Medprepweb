import React from 'react';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
function Navbar(props) {
    return (
        <div className='Navbar bg-slate-600 justify-evenly ' >
            <div>
                <h1>

            Med Den
                </h1>
            </div>
            <div className='flex-row flex content-evenly justify-evenly'>

                <NavLink to='/abourt'>Home</NavLink>
                <NavLink to='/abourt'>Learn</NavLink>
           
                <NavLink to='/abourt'>About</NavLink>
            </div>
           
        </div>
    );
}

export default Navbar;