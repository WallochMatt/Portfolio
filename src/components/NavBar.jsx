import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [navHighlighter, setNavHighlighter] = useState([false]);
    


    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);




    return (
        <nav>
            <ul className={color ? ' nav-pages nav-color-on' : 'nav-pages'}>
                <li>
                    <NavLink 
                        to={"/"} 
                        className={({ isActive }) => 
                            [
                                isActive ? "active nav-option" : "nav-option"
                            ].join(" ")
                        } 

                    >
                        HOME 
                        <span className='slash'>/</span>
                    </NavLink>
                </li> 
                <li>
                    <NavLink to={"/about"} className='nav-option'>
                        ABOUT
                    </NavLink>
                </li>   
                <li>
                    <NavLink to={"/projects"} className='nav-option'>
                        PROJECTS
                    </NavLink>
                </li>    
            </ul>
            {/* <ul className="nav-icons">
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
            </ul> */}
        </nav>
    );
}

export default Navbar;