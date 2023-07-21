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
                <div className="horz-cards">
                    <div onClick={displayComCon}>
                        <ProjectCard name={'Combat Consensus'} img={require("../assets/CC-example-2.png")} />
                    </div>
                    <div onClick={displayCaraCara}>
                        <ProjectCard name={'Cara Cara'} img={require("../assets/CaraCara-example-1.png")} />
                    </div>
                    <div onClick={displayUToob}>
                        <ProjectCard name={'uToob'} img={require("../assets/uToobThumbnail.png")} />
                    </div>
                </div>

                <div onClick={displayOff} >
                    {checkDisplay(display)}
                </div>

                {display}
                
                <div className="proj-foot">
                    <h2 className="repo">See all my project repositories on Github! &nbsp; &nbsp;
                        <Link to="https://github.com/WallochMatt?tab=repositories" target="_blank">
                            <i title="My Github page" class="fa-brands fa-github custom-fa github-badge"></i>
                        </Link>
                    </h2>
                </div>
            </body>



        </main>
    );


}

export default ProjectsPage;