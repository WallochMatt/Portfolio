import { useState } from "react";


const Testimonial = (props) => {
    const [imgError, setImgError] = useState(false);

    const handleImgError = () => {
        setImgError(true);
    }

    const renderContent = imgError || !props.photo ? (
        <div className="avatar-circle">{props.name[0]}</div>
        ) : (
            <img src={props.photo} onError={handleImgError}/>
        );


    return (  
        <div className="recommends">
            <p className="start">"</p>
            <p>{props.reference}</p>
            <p className="end">"</p>
            <div className="nametag">
                <div>
                    {renderContent}
                </div>
                <div>
                    <p>{props.name}</p>
                    <p>{props.position} @ {props.employer}</p>
                </div>
            </div>
        </div>
    );
}




export default Testimonial;