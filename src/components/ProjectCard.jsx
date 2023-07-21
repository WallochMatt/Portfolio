import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => {
    return (
        <Card className="card-size">
            <Card.Img className='card-image' src={props.img}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;