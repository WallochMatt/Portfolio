import { useState } from "react";
import DisplayComCon from "../components/Display-ComCon";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";
import ProjectCard from "../components/ProjectCard";
import DisplayModal from "../components/DisplayModal";


const DeployedAppsPage = () => {
    
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
        <main >

            <div className="tighten-cards">
                <ul className="organize-cards">
                    <li>
                        <ProjectCard click={() => changeDisplay(1)} name={'Combat Consensus'} thumbnail={'CC-example-2.png'} descr={""} />
                    </li>
                    <li>
                        <ProjectCard click={() => changeDisplay(2)} name={'Cara Cara'} thumbnail={'CaraCara-example-1.png'} descr={""} />
                    </li>
                    <li>
                        <ProjectCard click={() => changeDisplay(3)} name={'uToob'} thumbnail={'uToobThumbnail.png'} descr={""} />   
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

export default DeployedAppsPage;