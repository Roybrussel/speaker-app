import React, { useState } from "react";

const Heartbutton = () => {

    const [isFavorite, setFavorite] = useState("false");

    const handleToggle = () => {
        setFavorite(!isFavorite);
    }

    return(
        <i className={isFavorite ? "far fa-heart" : "fas fa-heart"} onClick={handleToggle}></i>
    )
}

export default Heartbutton;