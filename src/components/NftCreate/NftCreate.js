import {Button, Card, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import add_new_nft_card from "../../assets/image/add_new_nft_card.svg";


const NftCreate = props => {
    return (
        <Container className="justify-content-center pt-5" style={{height:"70vh"}}>
            <Row className="justify-content-md-center">
                <Card style={{ width: '60rem', height: '62vh' }} className="text-start">
                    <Card.Body >
                        <Container>
                            <Row >
                                <Col>
                                    Create Nft
                                </Col>
                            </Row>
                            <Form>
                                <Row>

                                <Col lg={4}>
                                        <Card style={{ width: '15rem', height: '20rem'  }} className="text-center">
                                            <Card.Header style={{ width: '15rem', height: '15rem'  }}>
                                                <Card.Img variant="center" src={add_new_nft_card} style={{ width: '12rem', height: '15rem'  }} />
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>Create New NFT</Card.Title>

                                            </Card.Body>
                                        </Card>
                                </Col>
                                <Col lg={8}>
                                    <Row className="justify-content-center text-start">
                                        <Col>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Collection Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Collection Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Display Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Display Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Website URL</Form.Label>
                                                    <Form.Control type="text" placeholder="Website URL" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Market Free (0% - 20%)</Form.Label>
                                                    <Form.Control type="text" placeholder="Market Free (0% - 20%)" />
                                                </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Collection Description</Form.Label>
                                            <FloatingLabel controlId="floatingTextarea2" label="Collection Description">
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder=""
                                                    style={{ height: '100px' }}
                                                />
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Col>
                                </Row>   <Row>
                                    <Col>
                                        <Button variant="secondary" type="submit" size="lg">
                                            Create NFT
                                        </Button>
                                    </Col>
                                </Row>
                        </Form>
                        </Container>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default NftCreate