import React from "react";

import InfoCard from "../InfoCard/InfoCard";

const Speakers = (props) => {

    const speakers = [
        {
            image: "billgates.jpg",
            name: "Bill Gates",
            about: "An American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation.",
            isFavorite: false
        },
        {
            image: "elonmusk.jpg",
            name: "Elon Musk",
            about: "A business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX; early investor,[b] CEO, and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.",
            isFavorite: false
        },
        {
            image: "douglascrockford.jpg",
            name: "Douglas Crockford",
            about: "An American computer programmer and entrepreneur who is involved in the development of the JavaScript language. He popularized the data format JSON (JavaScript Object Notation), and has developed various JavaScript related tools such as JSLint and JSMin.",
            isFavorite: false
        } 
    ]

    return(
        <div className="card-container">
            <h1>SPEAKERS</h1>
            <div className="card-row">
                {speakers
                    .filter((rec) => {
                        const targetString = `${rec.name}`.toLowerCase();
                        return props.searchQuery.length === 0 ? true : targetString.includes(props.searchQuery.toLowerCase());
                    })
                    .map(speaker => 
                        <InfoCard
                            image={speaker.image}
                            name={speaker.name}
                            about={speaker.about}
                            key={speaker.name}
                            isFavorite={speaker.isFavorite}
                        />
                    )}
            </div>
        </div>
    )
}

export default Speakers;