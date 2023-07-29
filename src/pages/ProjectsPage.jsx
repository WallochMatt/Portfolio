import { useState } from "react";
import DisplayComCon from "../components/Display-CombatConsensus";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
    const [display, setDisplay] = useState([]);
    /* const [cardClass, setCardClass] = useState(["card-size"]);
    Using   setCardClass("card-size add-border") in onClick functions
    test={cardClass} in the instantiation of the Card
    Utilizes add-border style
    If a border for the active Display is needed, I could do 3 separate state functions
    Looking for a better way to achieve that effect
*/
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
        )
    }

    function checkDisplay(display) {
        if (display.length !== 0) {
            return(
                <div className="close-arrow">
                    <i className="arrow up"></i>
                </div>
                
            )
        }
    }

    return ( 
        <main >
            <body className="proj-body">

                <div className="counter-header"></div>

                <div className="proj-header">

                    <div className="gh-link">
                        <Link to="https://github.com/WallochMatt?tab=repositories" target="_blank"> 
                            <h2 className="repo">See all my project repositories on Github! &nbsp; &nbsp;
                                <i title="My Github page" class="fa-brands fa-github custom-fa github-badge"></i>
                            </h2>
                        </Link>
                    </div>

                </div>


                <div className="horz-cards">
                    <ProjectCard click={displayComCon} name={'Combat Consensus'} thumbnail={'comcon-img'} descr={""} />

                    <ProjectCard click={displayCaraCara} name={'Cara Cara'} thumbnail={'cara-img'} descr={""} />
                    
                    <ProjectCard click={displayUToob} name={'uToob'} thumbnail={'utube-img'} descr={""} />
                </div>

                <div onClick={displayOff} >
                    {checkDisplay(display)}
                </div>

                {display}
            </body>
        </main>
    );

}

export default ProjectsPage;