import React from 'react'
import { Container, Form, Button, Row } from 'react-bootstrap';

export default function Contact() {
    return (
        <Container className="mt-5">
            <Form action="mailto:congmul@hotmail.com" method="GET">
                <Form.Group controlId="">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="">
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Row className="mt-5 ml-1"> 
            <a href="#">EMAIL: congmul@hotmail.com</a>
            </Row>
        </Container>
    )
}
