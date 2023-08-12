import Card from 'react-bootstrap/Card';


const ProjectCard = (props) => {
    return (
        <Card onClick={props.click}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
            <Card.Img variant='bottom' src={require(`../assets/${props.thumbnail}`)} alt='Image' required/>
            <Card.ImgOverlay>
                <Card.Text>Click to view details!</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default ProjectCard;