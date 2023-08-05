
const AboutPage = () => {
    return ( 
        <main className="about">

            <div className="about-left">
                <img src={require("../assets/Portrait.jpeg")} className="portrait"/>
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


                {/* <h2>Technologies and frameworks I use:</h2> */}
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
            </div>
            
        </main>
        

    );
}

export default AboutPage;