import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {



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
            {/* <div className='logo'>
                <Link to={"/"}>
                    <img src={require("../assets/HireMatthewWalloch.png")}></img>
                </Link>
            </div> */}
            <ul className={color ? ' nav-pages nav-color-on' : 'nav-pages'}>
            <li><Link to={"/"}>HOME </Link></li> 
                <li><Link to={"/about"}>ABOUT</Link></li>   
                {/* <li><Link to={"/myapps"}>MY APPS</Link></li>    */}
                <li><Link to={"/projects"}>PROJECTS</Link></li>    
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