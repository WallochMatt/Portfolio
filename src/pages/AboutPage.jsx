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
        }, 2000)
        return () => clearTimeout(timer);
    };


    
    const [popUp, setPopUp] = useState(['']);

    const spawnPopUp = (text) => {
        return(
            <div className="pop-up">
                {text}
            </div>
        );
    }

    const handleLeave=()=>{
        return setPopUp('')
    };

    const handleHoverEmail=()=>{
        return setPopUp(spawnPopUp("Click to copy my email"))
    };

    const handleHoverGit=()=>{
        return setPopUp(spawnPopUp("See all the repositories on my GitHub!"))
    };

    const handleHoverLinkedIn=()=>{
        return setPopUp(spawnPopUp("Check out my LinkedIn profile!"))
    };


    return ( 
        <main className="about">
            <div  className="about-left">
                <img src={require("../assets/Portrait.jpeg")} className="portrait"/>
                <div onMouseOver={handleHoverEmail} onMouseLeave={handleLeave}>
                    <p onClick={handleClick} className="email">
                        <i class="fa-solid fa-envelope" style={{color: '#ffffff'}}></i> matthewrwalloch+Hire@gmail.com
                    </p>
                </div>
                <hr className="dividing-line"/>
                <ul className="about-icons">
                    <li onMouseOver={handleHoverGit} onMouseLeave={handleLeave}>
                        <a href="https://github.com/WallochMatt?tab=repositories" target='blank'>
                            <i title="My Github page" class="fa-brands fa-github github-badge" ></i>
                        </a>
                    </li>
                            
                    <li onMouseOver={handleHoverLinkedIn} onMouseLeave={handleLeave}>
                        <a href="https://www.linkedin.com/in/mwalloch/" target='blank'>
                            <i title="My LinkedIn profile" class="fa-brands fa-linkedin linkedin-badge"></i>
                        </a>
                    </li>
                </ul>
                {popUp}
            </div>

            <div className="about-right">
                <h1>Welcome</h1>
                <hr/>

                <p>
                    Hi, I am Matthew Walloch and I'm a fullstack web developer. I'm also a big fan of videogames and art/animation, 
                    which is where I get my passion for mechanics and design within software. On top of being a developer, I consider
                    myself a lifelong student. Learning everything may not be possible but I can always try.
                </p>

                <h1></h1>
                <p>
                    I attended a coding bootcamp of Computer Science Engineering by devCodeCamp(link?) 
                </p>
            </div>   
            <div>
                {copiedBlurb}
            </div>
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