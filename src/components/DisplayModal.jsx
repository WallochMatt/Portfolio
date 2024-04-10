import { useState } from 'react';
import DisplayComCon from "../components/Display-ComCon";
import DisplayCaraCara from "../components/Display-CaraCara";
import DisplayUToob from "../components/Display-uToob";

const DisplayModal = (props) => {

    return ( 
        <div id="myModal" className="modal">

            <div className="modal-content">
                {props.display}
            </div>
        </div>
    );
}

export default DisplayModal;