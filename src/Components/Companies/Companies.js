import React from "react";

import InfoCard from "../InfoCard/InfoCard";

const Companies = (props) => {

    const companies = [
        {
            image: "facebook.jpg",
            name: "Facebook",
            about: "A social media and social networking service based in Menlo Park, California, and a flagship service of the namesake company Facebook, Inc. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.",
            isFavorite: false
        },
        {
            image: "spotify.png",
            name: "Spotify",
            about: "Spotify offers digital copyright restricted recorded music and podcasts, including more than 70 million songs, from record labels and media companies.[7] As a freemium service, basic features are free with advertisements and limited control, while additional features, such as offline listening and commercial-free listening, are offered via paid subscriptions.",
            isFavorite: false
        },
        {
            image: "tesla.png",
            name: "Tesla",
            about: "Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services. Tesla is ranked as the world's best-selling plug-in and battery electric passenger car manufacturer, with a market share of 16% of the plug-in segment and 23% of the battery electric segment 2020 sales. ",
            isFavorite: false
        }
    ]

    return(
        <div className="card-container">
            <h1>COMPANY STANDS</h1>
            <div className="card-row">
                {companies
                    .filter((rec) => {
                        const targetString = `${rec.name}`.toLowerCase();
                        return props.searchQuery.length === 0 ? true : targetString.includes(props.searchQuery.toLowerCase());
                    })
                    .map(company => {
                        return (
                        <InfoCard
                            image={company.image}
                            name={company.name}
                            about={company.about}
                            key={company.name}
                            isFavorite={company.isFavorite}
                        />
                        )
                    }
                    )}
            </div>
        </div>
    )
}

export default Companies;