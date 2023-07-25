import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <main className="master-align">
            <div className="banner">

                <div className="banner-inside">

                    <p className="banner-text">MATTHEW WALLOCH</p>

                    <h2>FULLSTACK WEB DEVELOPER</h2>

                    {/* <p>"Why do programmers use dark mode? It keeps the bugs away."</p> */}
                    <hr/>

                    <Link to={"/projects"}>
                        <button className="btn">SEE MY WORK
                            &nbsp;
                            <i className="arrow right"></i>
                            &nbsp;
                        </button>
                    </Link>

                </div>

            </div>

        </main>

    )
}

export default HomePage;