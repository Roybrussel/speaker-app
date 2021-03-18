import React from "react";

import SpeakerCard from "../SpeakerCard/SpeakerCard";

const Speakers = () => {

    const speakers = [
        {
            image: "billgates.jpg",
            name: "Bill Gates",
            about: "An American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation."
        },
        {
            image: "elonmusk.jpg",
            name: "Elon Musk",
            about: "A business magnate, industrial designer, and engineer.[3] He is the founder, CEO, CTO, and chief designer of SpaceX; early investor,[b] CEO, and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI."
        },
        {
            image: "douglascrockford.jpg",
            name: "Douglas Crockford",
            about: "An American computer programmer and entrepreneur who is involved in the development of the JavaScript language. He popularized the data format JSON (JavaScript Object Notation), and has developed various JavaScript related tools such as JSLint and JSMin."
        }
    ]

    return(
        <div className="speakers-container">
            <h1>SPEAKERS</h1>
            <div className="card-row">
                {speakers.map(speaker => 
                    <SpeakerCard
                        image={speaker.image}
                        name={speaker.name}
                        about={speaker.about}
                        key={speaker.name}
                    />
                )}
            </div>
        </div>
    )
}

export default Speakers;