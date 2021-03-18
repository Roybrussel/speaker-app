import React from "react";
import { Card } from "react-bootstrap";

const CompanyCard = (props) => {
    return(
        <div className="speaker-container">
            <Card className="card">
                <Card.Img variant="top" className="card-img" src={`images/${props.image}`} alt={props.name} key={props.key} />
                <Card.Body>
                    <Card.Title><h3>{props.name}</h3></Card.Title>
                    <Card.Text className="card-text">
                        <p>{props.about}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CompanyCard;