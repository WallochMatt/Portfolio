import { useState } from "react";
import DisplayComCon from "../components/Display-CombatConsensus";

const ProjectsPage = () => {
    const [display, setDisplay] = useState([]);

    const displayComCon = (e) =>{
        e.preventDefault();
        setDisplay        (
            <div>
                <p>Click worked!</p>
                <DisplayComCon />
            </div>
        );
    

    };

    const displayCaraCara = (e) =>{
        e.preventDefault();
        setDisplay        (
            <div>
                <p>Click worked for Cara</p>
                
            </div>
        );
    };

    const displayUToob = (e) =>{
        e.preventDefault();
        setDisplay        (
            <div>
                <p>Click worked for YT!</p>
                
            </div>
        );
    };
    
    return ( 

        <main className="master-align projPage">
            <button onClick={displayComCon}>test</button>
            <button onClick={displayCaraCara}>test</button>
            <button onClick={displayUToob}>test</button>
            {display}
            {/* <div>
                
                
                <div className="spacer"></div>
            
                <div className="project">
                    <h3>CaraCara - An eCommerce Site</h3>
            
                    <div className="prj-info">
                        <div>
                            <a href="http://18.119.156.5/index.html#home_jump" target="_blank">
                                <img src={require("../assets/CaraCara-example-2.png")}></img>
                                <img src={require("../assets/CaraCara-example-3.png")}></img>
                            </a>
                        </div>
            
                        <div>
                            <p>Example text of an explaination for the project, same infor as the lorem ispum above simulates</p>
                        </div>    
                    </div>
                </div>
            
                <div className="spacer"></div>
            
                <div className="project">
                <h3>uToob - A YouTube Parallel</h3>
                    <div className="prj-info">
                        <div>
                            <a href="http://18.222.171.6/" target="_blank">
                                <img src={require("../assets/uToob-example-1.png")}></img>
                                <img src={require("../assets/uToob-example-2.png")}></img>
                            </a>
                        </div>
                        <div>
                            <p>Example text of an explaination for the project, same infor as the lorem ispum above simulates</p>
                        </div>    
                    </div>      
                </div>
            </div> */}
        </main>
    );


}

export default ProjectsPage;