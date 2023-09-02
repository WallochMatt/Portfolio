import RepoInfo from "../components/RepoInfo";
import { useEffect, useState } from "react";

const ProjectsPage = (props) => {
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        
        setCurrentData(props.repoData);
    }, []);

//refactor needed
    function filterData(criteria){
        let results;
        results = props.repoData.filter(function(repo){
            if(repo.language === criteria){
                return true
            }

            if (criteria === "none"){
                return props.repoData;
            }
            
        })
        return setCurrentData(results);
    };

    function handleFilter(event){
        filterData(event);
    };


    return ( 
        <div className="repo-main">
            <h2>Do I have what you're looking for?</h2>

            <label>Language</label>
            <select onChange={(event) => handleFilter(event.target.value)}>
                <option value={"none"}>--</option>
                <option value={"JavaScript"}>JavaScript</option>
                <option value={"Java"}>Java</option>
                <option value={"Python"}>Python</option>
                <option value={"C#"}>C#</option>
            </select>
            
            <ul className="repo-list">
                {currentData &&
                currentData.map((data, index) => {
                    if (data && data.allLanguages){

                        // console.log("data instance of currentData: ", data);
                        return (
                            <RepoInfo data={data} key={index}/>
                        )
                    }
                    else{
                        return null;
                    }
                    
                })}
            </ul>
        </div>
    );
}

export default ProjectsPage;

