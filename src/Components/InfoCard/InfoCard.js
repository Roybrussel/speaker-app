import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import Heartbutton from "../Heartbutton/Heartbutton";

const InfoCard = (props) => {
    return(
        <div className="speaker-container">
            <Card className="card">
                <Card.Img variant="top" className="card-img" src={`images/${props.image}`} alt={props.name} key={props.key} />
                <Card.Body>
                    <Card.Title>
                        <Container>
                            <Row className="card-top-row">
                                <Col><h3>{props.name}</h3></Col>
                                <Col>
                                    <Heartbutton 
                                        isFavorite={props.isFavorite}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Card.Title>
                    <Card.Text className="card-text">
                        <p>{props.about}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default InfoCard;