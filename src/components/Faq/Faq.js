import {Accordion, Button, Card, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import add_new_nft_card from "../../assets/image/add_new_nft_card.svg";

const Faq = props => {
    return (
        <Container className="justify-content-center pt-5" style={{height:"70vh"}}>
            <Row className="justify-content-md-center">
                <Card style={{ width: '60rem', height: '62vh' }} className="text-start">
                    <Card.Body >
                        <Container>
                            <Row >
                                <Col>
                                    Faq
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Faq