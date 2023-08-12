import React, { useState } from 'react';

const Navbar = () => {
    const [copiedBlurb, setCopiedBlurb] = useState(['']);
    
    const spawnCopiedBlurb = () => {
        return(
            <div className="copy-popup">
                My email has been copied, I look forward to hearing from you!
            </div>
        );
    };
    
    const handleClick=()=>{
        navigator.clipboard.writeText("matthewrwalloch+Hire@gmail.com");
        setCopiedBlurb(spawnCopiedBlurb());
        const timer =  setTimeout(() => {
            setCopiedBlurb('')
        }, 2000)
        return () => clearTimeout(timer);
    };
    

    return (
        
        <nav>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>   
                <li><a href="/projects">PROJECTS</a></li>    
                <li onClick={handleClick}>EMAIL</li>
            </ul>
            <div>
                {copiedBlurb}
            </div>
        </nav>
        
    );
}

export default Navbar;