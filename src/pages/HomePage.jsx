import { Link } from "react-router-dom";
import { useState } from "react";
import DisplayComCon from "../components/Display-ComCon";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";
import ProjectCard from "../components/ProjectCard";
import DisplayModal from "../components/DisplayModal";

const HomePage = () => {
    const [display, setDisplay] = useState([]);

    const changeDisplay = (chosenDisplay) => {
        switch (chosenDisplay) {
            case 0:
                setDisplay(
                    []
                );
                break;

            case 1: 
                setDisplay(
                    <DisplayModal display={<DisplayComCon />} setDisplay={setDisplay}/>
                );
                break;

            case 2:
                setDisplay(
                    <DisplayModal display={<DisplayCaraCara />} setDisplay={setDisplay}/>
                );
                break;
                
            case 3:
                setDisplay(
                    <DisplayModal display={<DisplayUToob />} setDisplay={setDisplay}/>
                );
                break;
        };
    };

    function checkDisplay(display) {
        if (display.length !== 0) {
            return(
                <div className="close-x">
                    <i className="fa-solid fa-x" style={{color: '#ffffff'}}></i>
                </div>  
            );
        }
    };
    return (
        <main className="">

            <div className="big-hello special-text">
                <h1 className="big-text">Matthew Walloch</h1>
                <h1 className="big-text">Fullstack Web Developer</h1>
                <hr className="home-hr"/>
            </div>

            <div className="intro-message">
                <p>
                    I'm focused on creating applications that are engaging, accessible and easy-to-use.
                </p>
            </div>

            <div className="">
                <ul className="separate">
                    <li>
                        <ProjectCard click={() => changeDisplay(4)} name={'Coming Soon'} thumbnail={'M.png'} descr={"Stay tuned..."} styles={"wide-card"}/>   
                    </li>
                    <li>
                        <ProjectCard click={() => changeDisplay(1)} name={'Combat Consensus'} thumbnail={'CC-example-2.png'} descr={'Consensus Tracking App for Combat Sports'} />
                    </li>
                    <li>
                        <ProjectCard click={() => changeDisplay(3)} name={'uToob'} thumbnail={'uToobThumbnail.png'} descr={"A rendition of YouTube"} />   
                    </li>
                    <li>
                        <ProjectCard click={() => changeDisplay(2)} name={'Cara Cara'} thumbnail={'CaraCara-example-1.png'} descr={"eCommerce Site"} styles={"wide-card"} />
                    </li>
                </ul>
            </div>

            <div className=""> 
                <div onClick={() => changeDisplay(0)} >
                    {checkDisplay(display)}
                </div>
                {display}
            </div>
        </main>
    );
}

export default HomePage;

            {/* <div className="banner">
                <div className="banner-inside">
                    <p className="banner-text">MATTHEW WALLOCH</p>
                    <h2>FULLSTACK WEB DEVELOPER</h2>
                    <hr/>
                    <div className="banner-buttons">
                        <Link to={"/myapps"}>
                            <button className="btn">
                                <p>SEE MY APPS!
                                &nbsp;
                                    <i className="arrow right"></i>
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
</div> */}