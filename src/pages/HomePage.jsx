import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <main className="master-align">
            <div className="banner">

                <div className="banner-inside">

                    <p className="banner-text">MATTHEW WALLOCH</p>

                    <h2>FULLSTACK WEB DEVELOPER</h2>

                    <hr/>
    
                <div className="banner-buttons">
                    <Link to={"/projects"}>
                        <button className="btn">
                            <p>SEE MY WORK
                            &nbsp;
                                <i className="arrow right"></i>
                            </p>
                        </button>
                    </Link>

                    {/* <Link to={"/about"}>
                        <button className="btn">
                            <p>LEARN MORE
                            &nbsp;
                                <i className="arrow right"></i>
                            </p>
                        </button>
                    </Link> */}
                </div>

                </div>

            </div>

        </main>

    )
}

export default HomePage;