import React from "react";

import Speaker from "../Speaker/Speaker";

const Speakers = (props) => {

    const speakers = [
        {
            image: "speaker-component-1124.png",
            name: "Douglas Crockford"
        },
        {
            image: "speaker-component-1530.png",
            name: "Tamara Baker"
        },
        {
            image: "speaker-component-10803.png",
            name: "Eugene Chuvyrov"
        }
    ]

    return(
        <div>
            {speakers.map(speaker => 
                    <Speaker
                        image={speaker.image}
                        name={speaker.name}
                        key={speaker.name}
                    /> )}
        </div>
    )
}

export default Speakers;