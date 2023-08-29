

const RepoInfo = (props) => {

    return (
        <li>
            <p>{props.data.name}</p>
            <p>{props.data.description}</p>
            <p>{props.data.language}</p>
            <a href={props.data.html_url} target="_blank">LINK!</a>
        </li>
    );
}

export default RepoInfo;