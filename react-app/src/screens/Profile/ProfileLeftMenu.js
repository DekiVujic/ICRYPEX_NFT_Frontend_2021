import { useSelector } from "react-redux";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import created from "../../assets/image/carousel/created.svg";
import { dictMyWallet, dictAccActivities, dictMyNfts, dictSettings } from "../../constants";

const ProfileLeftMenu = props => {
    const { lang } = useSelector(state => state.ui);

    return (
        <div>
            <Card style={{ width: '20rem', height: '70vh' }} className="text-center">
                <Card.Body >
                    <Container style={{ height: "70vh" }}>
                        <Row>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                                <Image src={created} roundedCircle />
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
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                            <a href={dictMyWallet[lang]}>My Wallet</a>
                            </Col>
                        </Row>
                        <Row className="text-start">
                            <Col>
                                {/* <Link to={`profile/accactivities`} className="link">Account Activity</Link> */}
                                <a href={dictAccActivities[lang]}>Account Activity</a>
                            </Col>
                        </Row>
                        <Row className="text-start">
                            <Col>
                            <a href={dictMyNfts[lang]}>My NFT's</a>
                            </Col>
                        </Row>
                        <Row className="text-start">
                            <Col>
                            <a href={dictSettings[lang]}>Settings</a>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProfileLeftMenu