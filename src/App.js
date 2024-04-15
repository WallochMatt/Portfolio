import { Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import "./styles/styles.css"
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import DeployedAppsPage from "./pages/DeployedAppsPage";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {





    const [copiedBlurb, setCopiedBlurb] = useState(['']);

    const spawnCopiedBlurb = () => {
        return(
            <div className="copy-popup">
                My email has been copied, I look forward to hearing from you!
            </div>
        );
    };
    
    const handleClick=()=>{
        navigator.clipboard.writeText("matthewrwalloch+Hire@gmail.com");
        setCopiedBlurb(spawnCopiedBlurb());
        const timer =  setTimeout(() => {
            setCopiedBlurb('')
        }, 2500)
        return () => clearTimeout(timer);
    };



    const [repoData, setRepoData] = useState([]);
    
    async function getRepoData(){
        try{
            let repoResponse = await axios.get('https://personal-githubstatapi-fn.azurewebsites.net/api/GetGithubData');
            console.log(repoResponse);
            repoResponse.data.forEach(async repo => {
                
                var convertedLanguages = JSON.parse(repo.allLanguages);
                var currentLanguages = "";
                
                for(let language in convertedLanguages){
                    currentLanguages += language + " ";
                }
                repo.allLanguages = currentLanguages;
            });
            setRepoData(repoResponse.data); 
        }
        catch(error){
            console.log(error.repoResponse.data)
        }
    };

    //Deactivated for development
    useEffect(() => {
        getRepoData();
    }, []);



    return (
        <div className="">
            <div className="master-div"></div>
            <header className="counter-nav"></header>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage handleClick={handleClick} copiedBlurb={copiedBlurb} />} />
                <Route path="/myapps" element={<DeployedAppsPage />}/>
                <Route path="/projects" element={<ProjectsPage repoData={repoData}/>}/>
            </Routes>
            
            <div>
                {copiedBlurb}
            </div>
            
            <div className='logo'>
                <img src={require("./assets/HireMatthewWalloch.png")}></img>
            </div>

            <footer>
                <div className="foot-start">
                    <h6 className="footer-fontsize">
                        © 2024 Matthew Walloch
                    </h6>
                </div>

                <div className="foot-middle">
                    <h6 className="footer-fontsize">
                        Elsewhere
                    </h6>
                    <ul className="icons">
                        <li className="nav-badges">
                            <a href="https://github.com/WallochMatt?tab=repositories" target='blank'>
                                <i title="My Github page" className="fa-brands fa-github github-badge" ></i>
                            </a>
                        </li>
                        <li className="nav-badges">
                            <a href="https://www.linkedin.com/in/mwalloch/" target='blank'>
                                <i title="My LinkedIn profile" className="fa-brands fa-linkedin linkedin-badge"></i>
                            </a>
                        </li>
                    </ul>

                </div>

                <div className="foot-end">
                    <h6 className="footer-fontsize">
                        Contact
                    </h6>
                    <ul className="contact">
                        <li>
                            <p>matthewrwalloch@gmail.com |
                                <span onClick={handleClick}  className="email">
                                    <i className="fa-solid fa-envelope" style= {{color: "#ffffff;" }}></i>
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>

            </footer>
        </div>
        
    );
}

export default App;