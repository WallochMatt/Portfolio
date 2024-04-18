import { useState } from 'react';
import DisplayComCon from "../components/Display-ComCon";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";

import { Modal, Button } from 'react-bootstrap';

const DisplayModal = (props) => {
    

    return ( 

        <Modal 
            show={props.show} 
            onHide={props.onHide} 
            size="lg" 
            centered
            keyboard={true}
            animation={true}
        >
            <Modal.Header>
                <Button variant="secondary" onClick={props.onHide} className='modal-close'>
                    <i className="fa-solid fa-x" style={{color: '#ffffff'}}></i>
                </Button>
            </Modal.Header>
            <Modal.Body >
                {props.display}
            </Modal.Body>
        </Modal>
    );
}

export default DisplayModal;