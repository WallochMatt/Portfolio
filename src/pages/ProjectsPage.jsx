import { useState } from "react";
import DisplayComCon from "../components/Display-CombatConsensus";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";

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
            <button onClick={displayComCon}>test</button>
            <button onClick={displayCaraCara}>test</button>
            <button onClick={displayUToob}>test</button>
            {display}
        </main>
    );


}

export default ProjectsPage;