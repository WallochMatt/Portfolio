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
            let repoResponse = await axios.get('https://api.github.com/users/WallochMatt/repos?per_page=100&');
            repoResponse.data.forEach(async repo => {
                
                let languageData = (await axios.get(repo.languages_url)).data;
                var allLanguages = "";
                
                for(let language in languageData){
                    allLanguages += language + " ";
                }
                repo.allLanguages = allLanguages;
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