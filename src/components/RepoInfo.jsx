import { useEffect, useState } from "react";
import axios from "axios";


const RepoInfo = (props) => {

    const [currentData, setCurrentData] = useState([]);

    async function getAllData(){
        let response = await axios.get('https://api.github.com/users/WallochMatt/repos');
        console.log('response', response)
        setCurrentData(response.data);
    };

    useEffect(() => {
        getAllData();
    }, []);


    function filterData(criteria){
        let results;

        results = currentData.filter(function(repo){
            if(repo.language === criteria){
                console.log(repo)
                return true
            };
        })
        return setCurrentData(results);
    };

    function handleFilter(event){
        event.preventDefault();
        filterData('JavaScript')
    };




    return (
        <div>
            
                <button onClick={handleFilter}>JS only</button>
                <ul>
                    {currentData.map((data, index) => {
                        return(
                            <li key={index}>
                                <p>{data.name}</p>
                                <p>{data.description}</p>
                                <p>{data.language}</p>
                                <a href={data.html_url}>LINK!</a>
                            </li>
                        )
                    })}
                </ul>
        </div>
    );
}

export default RepoInfo;