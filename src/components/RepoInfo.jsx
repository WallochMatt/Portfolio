

const RepoInfo = (props) => {
    
    return (
        <li className="repo-slot" >
            
            <a href={props.data.html_url} target="_blank">
                <h2>
                {props.data.name + " "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </h2>
            </a>
            <p>{props.data.description}</p>
            <p>{props.data.allLanguages}</p>
            
        </li>
    );
}


export default RepoInfo;