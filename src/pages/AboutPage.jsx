import { useEffect, useState } from "react";


const AboutPage = () => {

    const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);


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


    const [popUp, setPopUp] = useState(['']);
    const spawnPopUp = (text) => {
        return(
            <div className="pop-up" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`}}>
                {/* <div>
                    The mouse is at position{' '}
                    <b>
                        ({mousePos.x}, {mousePos.y})
                    </b>
                </div> */}
                {text}
            </div>
        );
    }

    const handleLeave=()=>{
        return setPopUp('')
    };

    const handleHoverEmail=()=>{
        return setPopUp(spawnPopUp("Click the email to copy it"))
    };

    const handleHoverGit=()=>{
        return setPopUp(spawnPopUp("See all the repositories on my GitHub!"))
    };

    const handleHoverLinkedIn=()=>{
        return setPopUp(spawnPopUp("Check out my LinkedIn profile!"))
    };


    return ( 
        <main className="master-align">
            
            <div>
                {popUp}
                {copiedBlurb}
            </div>

            <div className="about">
                <div className="about-left">
                    <h1 className="big-text">hi</h1>
                    {/* <hr/> */}
                    <h2>I'm Matthew Walloch, a fullstack web developer.</h2>
                    <p>
                    I am driven by a dual passion for video games and art. I've always been captivated by the mechanics behind games and the creativity in art, which naturally led me to the world of software.

My journey to becoming a developer was solidified through devCodeCamp's Computer Science Engineering coding boot camp, where I graduated with distinction. I thrive on the challenge of turning imaginative ideas into functional, visually appealing applications.

What sets me apart is my insatiable appetite for learning. With each project, I strive to fuse technology and creativity to deliver seamless user experiences. I'm on a constant quest to stay updated with the latest industry trends, making sure my skills are always at the cutting edge.

In a nutshell, I'm Matthew Walloch—a passionate fullstack developer who found the perfect blend of inspiration in video games and art, and turned it into a thriving career in software development.
                    </p>
                </div>   
                <div  className="about-right">
                    <img alt='Image' src={require("../assets/Portrait.jpeg")} required/>
                </div>
            </div>

                {/* Link to resume can go in here to */}

                {/* onMouseOver={handleHoverEmail} onMouseLeave={handleLeave} */}
                    {/* <i class="fa-solid fa-envelope" style={{color: '#ffffff'}}> */}


                {/* <span onClick={handleClick}  className="email">
                    matthewrwalloch+Hire@gmail.com <i class="fa-regular fa-copy"></i>
                </span>
                <a href="https://docs.google.com/document/d/1Q2X1WsSptEQrbnsefLShBFnuKuixkTlMYDa27oP1sGU/" target="blank" className="email">
                    Resume <i class="fa-solid fa-arrow-up-right-from-square" />
                </a> */}

            {/*
                <ul className="about-icons">
                    onMouseOver={handleHoverGit} onMouseLeave={handleLeave} 
                    <li className="badge">
                        <a href="https://github.com/WallochMatt?tab=repositories" target='blank'>
                            <i title="My Github page" class="fa-brands fa-github github-badge" ></i>
                        </a>
                    </li>
                    onMouseOver={handleHoverLinkedIn} onMouseLeave={handleLeave}   
                    <li className="badge">
                        <a href="https://www.linkedin.com/in/mwalloch/" target='blank'>
                            <i title="My LinkedIn profile" class="fa-brands fa-linkedin linkedin-badge"></i>
                        </a>
                    </li>
                </ul>
            */}
        </main>
    );
}

export default AboutPage;

// Keeping for the potential use of these icons
{/* <ul className="frame-tech">
    <li>
        <i title="HTML 5" class="fa-brands fa-html5 custom-fa html-badge"></i>
        <p>HTML5</p>
    </li>
    <li>
        <i title="CSS 3" class="fa-brands fa-css3-alt custom-fa css-badge"></i>
        <p>CSS3</p>
    </li>
    <li>
        <i title="Bootstrap" class="fa-brands fa-bootstrap custom-fa bootstrap-badge"></i>
        <p>Bootstrap</p>
    </li>
    <li>
        <i title="React" class="fa-brands fa-react custom-fa react-badge"></i>
        <p>React</p>
    </li>
    <li>
        <i title="Font Awesome" class="fa-solid fa-font-awesome custom-fa fontawesome-badge"></i>
        <p>Font Awesome</p>
    </li>
    <li>
        <i class="fa-brands fa-python custom-fa"></i>
        <p>Python</p>
    </li>
    <li>
        <i class="fa-brands fa-square-js custom-fa"></i>
        <p>JavaScript</p>
    </li>
    <li>
        <i class="fa-brands fa-java custom-fa"></i>
        <p>Java</p>
    </li>
    <li>
        <i class="fa-brands fa-docker custom-fa"></i>
        <p>Docker</p>
    </li>
    <li>
        <i class="fa-brands fa-aws custom-fa"></i>
        <p>Amazon Web Services</p>
    </li>
</ul> */}