import React, { useState } from 'react';

const Navbar = () => {


    return (
        <nav>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>   
                <li><a href="/apps">MY APPS</a></li>   
                <li><a href="/projects">PROJECTS</a></li>    
                {/* <li >EMAIL</li> */}
            </ul>
        </nav>
    );
}

export default Navbar;