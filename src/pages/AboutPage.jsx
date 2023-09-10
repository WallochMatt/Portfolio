import { useState } from "react";


const AboutPage = () => {

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
        }, 2500)
        return () => clearTimeout(timer);
    };


    return ( 
        <main className="master-align">
            
            <div>
                {copiedBlurb}
            </div>

            <div className="about">
                <div className="about-left">
                    <h1 className="big-text">hi</h1>
                    <h2>I'm Matthew Walloch, a fullstack web developer.</h2>
                    <p>
                        I am driven by a dual passion for video games and art. I've always been captivated by the mechanics behind games and the creativity in art, which naturally led me to the world of software.

                        My journey to becoming a developer was solidified through devCodeCamp's Computer Science Engineering coding boot camp, where I graduated with distinction. I thrive on the challenge of turning imaginative ideas into functional, visually appealing applications.

                        What sets me apart is my insatiable appetite for learning. With each project, I strive to fuse technology and creativity to deliver seamless user experiences. I'm on a constant quest to stay updated with the latest industry trends, making sure my skills are always at the cutting edge.

                        In a nutshell, I'm Matthew Walloch—a passionate fullstack developer who found the perfect blend of inspiration in video games and art, and turned it into a thriving career in software development.
                    </p>
                    <hr/>
                    <div className="about-socials">
                        <span onClick={handleClick}  className="email">
                            matthewrwalloch+Hire@gmail.com <i className="fa-regular fa-copy"></i>
                        </span>
                        <ul className="about-icons">
                            <li className="badge">
                                <a href="https://github.com/WallochMatt?tab=repositories" target='blank'>
                                    <i title="My Github page" className="fa-brands fa-github github-badge" ></i>
                                </a>
                            </li>
                            <li className="badge">
                                <a href="https://www.linkedin.com/in/mwalloch/" target='blank'>
                                    <i title="My LinkedIn profile" className="fa-brands fa-linkedin linkedin-badge"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>   
                <div  className="about-right">
                    <img alt='Image' src={require("../assets/Portrait.jpeg")} required/>
                </div>
            </div>
        </main>
    );
}

export default AboutPage;
