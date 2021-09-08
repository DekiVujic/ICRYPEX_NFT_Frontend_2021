import {Button, Card, Col, Container, Form, Row } from "react-bootstrap";


const SignUp = props => {
    return (
        <Container className="justify-content-center pt-5" style={{height:"100vh"}}>
            <Row className="justify-content-md-center">
                <Card style={{ width: '35rem', height: '100vh' }} className="text-center">
                    <Card.Body >
                        <Container style={{height:"70vh"}}>
                            <Row className="justify-content-center">
                                <Col>
                                    Sign Up
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    Already have an account? <a href={null}>Sign In</a>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col>
                                    <Card  style={{ width: '30rem', height: '15vh', color:'white' }} className="text-center"  bg="dark">
                                        <Card.Body >
                                            <Container style={{height:"70vh"}}>
                                                <Row className="justify-content-center">
                                                    <Col>
                                                        One Account Two Platforms
                                                    </Col>
                                                </Row>
                                                <Row className="justify-content-center">
                                                    <Col>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,

                                                    </Col>
                                                </Row>
                                                <Row className="justify-content-center">
                                                    <Col>
                                                        Sign Up
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="justify-content-center text-start">
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Fist Name</Form.Label>
                                            <Form.Control type="text" placeholder="First Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Display Name</Form.Label>
                                            <Form.Control type="text" placeholder="Display Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>User Name</Form.Label>
                                            <Form.Control type="text" placeholder="User Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="Confirm Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="By clicking Sign Up, I hereby acknowledge that I agree to the ICRYPEX NFT Terms and Conditions and I’ve read the Privacy Notice." />
                                        </Form.Group>
                                        <div className="d-grid gap-2">
                                            <Button variant="primary" type="submit" size="lg">
                                                Sign Up
                                            </Button>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default SignUp