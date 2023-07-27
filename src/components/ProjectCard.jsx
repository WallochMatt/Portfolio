import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ProjectCard = (props) => {
    return (
    <Card onClick={props.click}>
        <div className={props.class}>
            <Card.Text>Click to view details</Card.Text>
        </div>
        {/* <Card.Img variant="cust" src={props.img} /> */}
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle>View project</Card.Subtitle>
        </Card.Body>
    </Card>
    );
}

export default ProjectCard;