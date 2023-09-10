import { useState } from "react";
import DisplayComCon from "../components/Display-ComCon";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";
import ProjectCard from "../components/ProjectCard";


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
                <div className="close-x">
                    <i className="fa-solid fa-x" style={{color: '#ffffff'}}></i>
                </div>
                
            );
        }
        else{
            return(
                <div className="display-help">
                    <p>Select an app from the left to see it's information</p>
                </div>
            );
        };
    };

    return ( 
        <main >
            <div className="deployed-apps">
                <div className="apps-left">
                    <ProjectCard click={() => changeDisplay(1)} name={'Combat Consensus'} thumbnail={'CC-example-2.png'} descr={""} />
                    <ProjectCard click={() => changeDisplay(2)} name={'Cara Cara'} thumbnail={'CaraCara-example-1.png'} descr={""} />
                    <ProjectCard click={() => changeDisplay(3)} name={'uToob'} thumbnail={'uToobThumbnail.png'} descr={""} />
                </div>

                <div className="apps-right">
                    
                    <div onClick={() => changeDisplay(0)} >
                        {checkDisplay(display)}
                    </div>
                    {display}
                </div>
            </div>
        </main>
    );
}

export default DeployedAppsPage;