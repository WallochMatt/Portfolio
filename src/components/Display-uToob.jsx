import { Link } from "react-router-dom";

const DisplayUToob = () => {
    return ( 
        <div className="project">
        <h3>uToob - A YouTube Parallel</h3>
            <div className="prj-info">
                <div>
                    <div className="img-background">
                        <Link href="http://18.222.171.6/" target="_blank">
                            <img src={require("../assets/uToob-example-1.png")}></img>
                        </Link>
                    </div>

                    <div className="separator"></div>

                    <div className="img-background">
                        <Link href="http://18.222.171.6/" target="_blank">
                            <img src={require("../assets/uToob-example-2.png")}></img>
                        </Link>
                    </div>
                </div>
                <div>
                    <p>Example text of an explaination for the project, same infor as the lorem ispum above simulates</p>
                </div>    
            </div>  
            <div className="separator"></div>    
        </div>
    );
}

export default DisplayUToob;