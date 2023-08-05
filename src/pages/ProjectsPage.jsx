import { useState } from "react";
import DisplayComCon from "../components/Display-CombatConsensus";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
    const [display, setDisplay] = useState([]);

    const displayComCon = (e) =>{
        e.preventDefault();
        setDisplay        (
            <div>
                <DisplayComCon />
            </div>
        );
    };

    const displayCaraCara = (e) =>{
        e.preventDefault();
        setDisplay        (
            <div>
                <DisplayCaraCara />
            </div>
        );
    };

    const displayUToob = (e) =>{
        e.preventDefault();
        setDisplay        (
            <div>
                <DisplayUToob />
            </div>
        );
    };

    const displayOff = (e) => {
        e.preventDefault();
        setDisplay(
            []
        );
    };

    function checkDisplay(display) {
        if (display.length !== 0) {
            return(
                <div className="close-arrow">
                    <i className="arrow left"></i>
                </div>
                
            );
        };
    };


    const [popUp, setPopUp] = useState(['']);

    const spawnPopUp = () => {
        return(
            <div className="pop-up">
                See all the repositories on my GitHub!
            </div>
            
        );
    }

    const handleLeave=()=>{
        return setPopUp('')
    }

    const handleHover=()=>{
        return setPopUp(spawnPopUp())
    }


    return ( 
        <main >
            <div className="counter-header"></div>
            
            <div className="proj-main">
                <div className="proj-left">
                    <ProjectCard click={displayComCon} name={'Combat Consensus'} thumbnail={'comcon-img'} descr={""} />
                    <ProjectCard click={displayCaraCara} name={'Cara Cara'} thumbnail={'cara-img'} descr={""} />
                    <ProjectCard click={displayUToob} name={'uToob'} thumbnail={'utube-img'} descr={""} />
                </div>

                <div className="proj-right">
                    <div onClick={displayOff} >
                        {checkDisplay(display)}
                    </div>
                    {display}
                </div>
            </div>


            {/* <div className="gh-link" >
                <Link to="https://github.com/WallochMatt?tab=repositories" target="_blank"> 
                {popUp}
                    <h2 className="repo" onMouseOver={handleHover} onMouseLeave={handleLeave}>
                        <i title="My Github page" class="fa-brands fa-github custom-fa github-badge" ></i>
                    </h2>
                </Link>
            </div> */}



        </main>
    );

}

export default ProjectsPage;

