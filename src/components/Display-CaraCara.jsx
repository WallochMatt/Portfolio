import { Link } from "react-router-dom";

const DisplayCaraCara = () => {
    return ( 
        <div className="project">
            <h3>CaraCara - An eCommerce Site</h3>
    
            <div className="prj-info">
                <div>
                    <div className="img-background">
                        <Link href="http://18.119.156.5/index.html#home_jump" target="_blank">
                            <img src={require("../assets/CaraCara-example-2.png")}></img>
                        </Link>
                    </div>

                    <div className="separator"></div>
                    
                    <div className="img-background">
                        <Link>
                            <img src={require("../assets/CaraCara-example-3.png")}></img>
                        </Link>
                    </div>
                </div>
    
                <div>
                    <p>Example text of an explaination for the project, same infor as the lorem ispum above simulates</p>
                </div>    
            </div>

        </div>
    );
}

export default DisplayCaraCara;