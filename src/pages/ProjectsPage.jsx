import { useState } from "react";
import DisplayComCon from "../components/Display-CombatConsensus";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";
import ProjectCard from "../components/ProjectCard";

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
    
    return ( 

        <main className="master-align projPage">
            <div className="horz-cards">
                <div onClick={displayComCon}>
                    <ProjectCard name={'Combat Consensus'} img={require("../assets/CC-example-2.png")} />
                </div>
                <div onClick={displayCaraCara}>
                    <ProjectCard name={'Cara Cara'} img={require("../assets/CaraCara-example-1.png")} />
                </div>
                <div onClick={displayUToob}>
                    <ProjectCard name={'uToob'}  />
                </div>
            </div>

            {display}
        </main>
    );


}

export default ProjectsPage;