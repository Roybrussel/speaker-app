import React, { useState } from "react";

const Heartbutton = (props) => {

    const [isFavorite, setIsFavorite] = useState("false");

    const handleToggle = () => {
        setIsFavorite(!isFavorite);
        
    }

    return(
        <i className={isFavorite ? "far fa-heart" : "fas fa-heart"} onClick={handleToggle}></i>
    )
}

export default Heartbutton;