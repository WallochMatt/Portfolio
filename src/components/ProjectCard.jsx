import Card from 'react-bootstrap/Card';


const ProjectCard = (props) => {
    return (

        <Card onClick={props.click}>
            <Card.Img variant='top' src={require(`../assets/${props.thumbnail}`)} alt='Image' required/>
            <Card.ImgOverlay>
                <Card.Text>Click to view details</Card.Text>
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text>Text example</Card.Text> */}
            </Card.Body>
        </Card>





    // <Card onClick={props.click}>
    //     <div className={`card-format ${props.thumbnail}`}>
    //         <Card.Text>Click to view details</Card.Text>
    //     </div>
    //     <Card.Footer>
    //         <Card.Body>
    //             <Card.Title>{props.name}</Card.Title>
    //             <Card.Subtitle>{props.descr}</Card.Subtitle>
    //         </Card.Body>
    //     </Card.Footer>
    // </Card>
    );
}

export default ProjectCard;