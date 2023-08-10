import Card from 'react-bootstrap/Card';


const ProjectCard = (props) => {
    return (
    <Card onClick={props.click}>
        <div className={`card-format ${props.thumbnail}`}>
            <Card.Text>Click to view details</Card.Text>
        </div>
        <Card.Footer>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.descr}</Card.Subtitle>
            </Card.Body>
        </Card.Footer>
    </Card>
    );
}

export default ProjectCard;