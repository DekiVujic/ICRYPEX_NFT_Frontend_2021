import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import created from "../../assets/image/carousel/created.svg";


const SettingLeftMenu = props => {
    return (
        <Card style={{ width: '20rem', height: '100vh' }} className="text-center">
            <Card.Body >
                <Container style={{ height: "70vh" }}>
                    <Row>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                Setting
                            </div>
                            <div>
                                Gear
                            </div>
                        </div>
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                            <Image src={created} roundedCircle />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                            Upload Profile Photo
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                            <Button variant="primary">Upload Photo</Button>
                        </Col>
                    </Row>
                    <Row className="text-start">
                        <Col>
                            Vollut is a digital artist who builds his work around comedy and animation.
                            Born and raised in a small city in Russia he developed his career online and
                            was heavily influenced by digitalization and the global web. Being a part of
                            the generation that uses memes to express themselves he found his voice in
                            similar things. That’s why you can see a lot of pop-cultural references in his work.
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>

    )
}

export default SettingLeftMenu