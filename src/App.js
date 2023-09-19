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
        <div >
            <header className="counter-nav"></header>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/myapps" element={<DeployedAppsPage />}/>
                <Route path="/projects" element={<ProjectsPage repoData={repoData}/>}/>
            </Routes>
        </div>
    );
}

export default App;