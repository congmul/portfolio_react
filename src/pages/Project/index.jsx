import React from 'react'
import { Container, CardColumns, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import Bear_share from "../../assets/img/bear_share.gif";
import Hike_Local from "../../assets/img/Hike_Local.gif";
import WorkDayScheduler from "../../assets/img/WorkDayScheduler.gif";
import WeatherDashboard from "../../assets/img/WeatherDashboard.gif";
import BurgerLogger from "../../assets/img/eatDaBurger.gif";

export default function Project() {
    return (
        <Container className="mt-5">
            <CardColumns>
            <Card>
                    <Card.Img variant="top" src={Bear_share} />
                    <Card.Body>
                        <Card.Title>Bear Share</Card.Title>
                        <Card.Text>
                            The goal for this project was to build an app where users can buy and sell teddy bears!
                        </Card.Text>
                    </Card.Body>
                </Card>
            <Card>
                    <Card.Img variant="top" src={WeatherDashboard} />
                    <Card.Body>
                        <Card.Title>WeatherDashboard</Card.Title>
                        <Card.Text>
                        This is Weather Dashboard. It will display Current weather and 5-day Forecast.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            FullStack development <br />MERN, Javascript, MySQL, HTML, CSS
                        </p>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Hike_Local} />
                    <Card.Body>
                        <Card.Title>Hike_Local</Card.Title>
                        <Card.Text>
                        This application will give users a list of hiking trails in their area based on a
                  set of criteria.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card>
                    <Card.Img variant="top" src={WorkDayScheduler} />
                    <Card.Body>
                        <Card.Title>WorkDayScheduler</Card.Title>
                        <Card.Text>
                        This is Work Day Scheduler. This app allow a user to save events for each hour of
                  the day.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card>
                    <Card.Img variant="top" src={BurgerLogger} />
                    <Card.Body>
                        <Card.Title>Burger Logger</Card.Title>
                        <Card.Text>
                        This is a restaurant app that lets users input the names of burgers they'd like to
                  eat.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                
            </CardColumns>
        </Container>
    )
}
