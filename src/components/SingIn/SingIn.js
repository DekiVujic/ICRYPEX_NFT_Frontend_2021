import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";


const SignIn = props => {
    return (
        <Container className="justify-content-center pt-5" style={{height:"100vh"}}>
            <Row className="justify-content-md-center">
                <Card style={{ width: '35rem', height: '45vh' }} className="text-center">
                    <Card.Body >
                        <Container style={{height:"50vh"}}>
                            <Row className="justify-content-center">
                                <Col>
                                    Sign In
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    Don’t have an account yet? <a href={null}>Sign Up</a>
                                </Col>
                            </Row>
                            <Row className="justify-content-center text-start">
                                <Col>
                                    <Form>
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
                                        <Form.Group className="mb-3 text-end" controlId="formBasicPassword">
                                            <a href={null} > Forgot Password ?</a>
                                        </Form.Group>
                                        <div className="d-grid gap-2">
                                            <Button variant="primary" type="submit" size="lg">
                                                Sign In
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

export default SignIn