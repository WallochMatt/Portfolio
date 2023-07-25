import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = (props) => {
    return (
    <Card>
        <Card.Img variant="cust" src={props.img} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            Click on a card to view more info
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
    </Card>
    );
}

export default ProjectCard;