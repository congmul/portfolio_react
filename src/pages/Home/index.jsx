import React from 'react'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import ProfileImg from "../../assets/img/JJH.jpeg";

export default function Home() {

    const datasets = {
        labels: ['Javascript', 'HTML', 'CSS', 'REACT', 'MongoDB', 'MySQL'],
        datasets: [{
            label: 'Skills',
            data: [95, 89, 90, 97, 92, 97],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ProfileImg} />
                        <Card.Body>
                            <Card.Title>Jehyun Jung</Card.Title>
                            <Card.Text>
                                I’m good as a problem-solver. During building a project, I get a lot of problems. I enjoy
                                organizing them, and I try to solve them one by one until solving all. Also, I’m interested in studying new
                                skills and a quick learner. Whenever I start a project, I should learn about new technology frequently, but
                                I do not hesitate to learn it and use it.
                    </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Bar
                        data={datasets}
                        width={100}
                        height={50}
                        options={{
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        , maintainAspectRatio: false }}
                    />
                </Col>
            </Row>
        </Container>
    )
}
