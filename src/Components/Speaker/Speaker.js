import React from "react";

const Speaker = (props) => {
    return(
        <div className="speaker-container">
            <p>{props.name}</p>
            <img src={`images/${props.image}`} alt={props.name} key={props.key} />
            <p>{props.about}</p>
        </div>
    )
}

export default Speaker;