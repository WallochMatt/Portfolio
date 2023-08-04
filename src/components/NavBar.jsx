import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <i class="fa-solid fa-house" style={{color: '#ffffff'}}></i>
                    </a>
                </li>
                {/* <li><a href="/about">ABOUT</a></li>   
                <li><a href="/projects">PROJECTS</a></li>     */}
                <li>
                    <a href="">
                        <i class="fa-solid fa-envelope" style={{color: '#ffffff'}}></i>
                    </a>
                </li>
            </ul>
        </nav>
        
    )
}

export default Navbar;