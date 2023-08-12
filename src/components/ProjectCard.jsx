import Card from 'react-bootstrap/Card';


const ProjectCard = (props) => {
    return (

        <Card onClick={props.click}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text>Text example</Card.Text> */}
            </Card.Body>
            <Card.Img variant='bottom' src={require(`../assets/${props.thumbnail}`)} alt='Image' required/>
            <Card.ImgOverlay>
                <Card.Text>Click to view details</Card.Text>
            </Card.ImgOverlay>
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