import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <div className='logo'>
                <Link to={"/"}>
                    <img src={require("../assets/M.png")}></img>
                </Link>
            </div>
            <ul className='nav-pages'>
                <li><Link to={"/about"}>ABOUT</Link></li>   
                <li><Link to={"/myapps"}>MY APPS</Link></li>   
                <li><Link to={"/projects"}>PROJECTS</Link></li>    
            </ul>
            <ul className="nav-icons">
                <li className="nav-badges">
                    <a href="https://github.com/WallochMatt?tab=repositories" target='blank'>
                        <i title="My Github page" className="fa-brands fa-github github-badge" ></i>
                    </a>
                </li>
                <li className="nav-badges">
                    <a href="https://www.linkedin.com/in/mwalloch/" target='blank'>
                        <i title="My LinkedIn profile" className="fa-brands fa-linkedin linkedin-badge"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;