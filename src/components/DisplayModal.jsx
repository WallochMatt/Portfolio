import { useState } from 'react';
import DisplayComCon from "../components/Display-ComCon";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";
import { Modal } from 'react-bootstrap';

const DisplayModal = (props) => {
    const show = true;

    return ( 
        // <div id="myModal" className="modal">

        //     <div className="modal-content">
        //         {props.display}
        //     </div>
        // </div>
        <Modal
            show={show}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            scrollable={true}
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Custom Modal Styling
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.display}
            </Modal.Body>
        </Modal>
    );
}

export default DisplayModal;