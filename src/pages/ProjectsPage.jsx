import { useState } from "react";
import DisplayComCon from "../components/Display-ComCon";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
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
                    <div>
                        <DisplayComCon />
                    </div>
                );
                break;

            case 2:
                setDisplay(
                    <div>
                        <DisplayCaraCara />
                    </div>
                );
                break;
                
            case 3:
                setDisplay(
                    <div>
                        <DisplayUToob />
                    </div>
                );
                break;
        };
    };

    function checkDisplay(display) {
        if (display.length !== 0) {
            return(
                <div className="close-arrow">
                    <i class="fa-solid fa-x" style={{color: '#ffffff'}}></i>
                </div>
                
            );
        };
    };


    return ( 
        <main >
            <div className="proj-main">
                <div className="proj-left">
                    <ProjectCard click={() => changeDisplay(1)} name={'Combat Consensus'} thumbnail={'CC-example-2.png'} descr={""} />
                    <ProjectCard click={() => changeDisplay(2)} name={'Cara Cara'} thumbnail={'CaraCara-example-1.png'} descr={""} />
                    <ProjectCard click={() => changeDisplay(3)} name={'uToob'} thumbnail={'uToobThumbnail.png'} descr={""} />
                </div>

                <div className="proj-right">
                    <div onClick={() => changeDisplay(0)} >
                        {checkDisplay(display)}
                    </div>
                    {display}
                </div>
            </div>
        </main>
    );

}

export default ProjectsPage;

