import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>   
                <li><a href="/myapps">MY APPS</a></li>   
                <li><Link to={"/projects"}>PROJECTS</Link></li>    
            </ul>
        </nav>
    );
}

export default Navbar;