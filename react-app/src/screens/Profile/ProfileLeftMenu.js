import {Card, Col, Container, Image, Row} from "react-bootstrap";
import created from "../../assets/image/carousel/created.svg";


const ProfileLeftMenu = props => {
    return(
        <Card style={{ width: '20rem', height: '70vh' }} className="text-center">
            <Card.Body >
                <Container style={{height:"70vh"}}>
                    <Row>
                        <div style={{ display: "flex",justifyContent: "space-between"}}>
                            <div>
                                My Account
                            </div>
                            <div>
                                Gear
                            </div>
                        </div>
                    </Row>
                    <Row className="justify-content-center">
                            <Col>
                                <Image  src={created} roundedCircle  />
                            </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                            Voodo Doll
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                            0x9938…1e76
                            <span>Gear</span>
                        </Col>
                    </Row>
                    <Row className="text-start">
                        <Col>
                           Balance
                        </Col>
                    </Row>
                    <Row>
                        <div style={{ display: "flex",justifyContent: "space-between"}}>
                            <div>
                                1,7 Avax
                            </div>
                            <div>
                                60,63 usd
                            </div>
                        </div>
                    </Row>
                    <Row className="text-start">
                        <Col>
                            Crypto Assets
                        </Col>
                    </Row>
                    <Row className="text-start">
                        <Col>
                            Account Activity
                        </Col>
                    </Row>
                    <Row className="text-start">
                        <Col>
                            My NFT's
                        </Col>
                    </Row>
                    <Row className="text-start">
                        <Col>
                            History
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>

    )
}

export default  ProfileLeftMenu