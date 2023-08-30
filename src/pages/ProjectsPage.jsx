

import RepoInfo from "../components/RepoInfo";
import axios from "axios";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
    const [repoData, setRepoData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    
    async function getAllData(){
        let response = await axios.get('https://api.github.com/users/WallochMatt/repos');
        setRepoData(response.data);
        setCurrentData(response.data);
    };

    useEffect(() => {
        getAllData();
    }, []);


    function filterData(criteria){
        let results;
        results = repoData.filter(function(repo){
            if(repo.language === criteria){
                return true
            }

            if (criteria === "none"){
                return repoData;
            }
            
        })
        return setCurrentData(results);
    };

    function handleFilter(event){
        filterData(event);
    };



    return ( 
        <div className="about-below">
                <h2>Do I have what you're looking for?</h2>

                <label>Language</label>
                <select onChange={(event) => handleFilter(event.target.value)}>
                    <option value={"none"}>--</option>
                    <option value={"JavaScript"}>JavaScript</option>
                    <option value={"Java"}>Java</option>
                    <option value={"Python"}>Python</option>
                    <option value={"C#"}>C#</option>
                </select>
                
                <ul>
                    {currentData.map((data) => {
                        return(
                            <RepoInfo data={data}></RepoInfo>
                        )
                    })};
                </ul>
            </div>
    );

}

export default ProjectsPage;

