import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <main className="master-align">
            <div className="banner">

                <div className="banner-inside">

                    <h1 className="">Matthew Walloch</h1>

                    <h2>Fullstack Web Developer</h2>

                    {/* <p>"Why do programmers use dark mode? It keeps the bugs away."</p> */}

                    <Link to={"/projects"}>
                        <button className="btn">See the projects! »</button>
                    </Link>

                </div>

            </div>

        </main>

    )
}

export default HomePage;