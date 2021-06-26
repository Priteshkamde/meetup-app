import React from 'react'

import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

function Hero() {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <h2 className="display-1 font-weight-bolder">Meetup App</h2> 
                        <h3 className="display-4 font-weight-light">In React JS</h3> 
                        <hr/>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero
