import {Button, Card, Col, Container, Image, Row, Tab, Tabs} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import avax_icon from "../../assets/image/avax_icon.svg";
 

const MyWallet = props => {
    const { t } = useTranslation(["common", "profile"]);
    const { lang } = useSelector(state => state.ui);


    return (
        <Container>
            <Row>
                <Col>
                    Balance
                </Col>
            </Row>
            <Row>
                <Card style={{ width: '100%', height: '70vh' }} className="text-center">
                    <Card.Body >
                        <Tabs defaultActiveKey="created" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="created" title="Created">
                                <Container style={{height:"70vh"}}>
                                    <Card style={{ width: '26rem', height: '10rem'  }} className="text-center">
                                        <Card.Body>
                                            <Container style={{height:"30rem"}}>
                                                <Row>
                                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                                        <div>
                                                           <Row style={{ display: "flex",justifyContent: "start"}}>
                                                               <Col lg={3}>
                                                                   <Image  src={avax_icon} roundedCircle  />
                                                               </Col>

                                                               <Col lg={9}>
                                                                   <Row>
                                                                       <Col>
                                                                           AVAX
                                                                       </Col>
                                                                   </Row>
                                                                   <Row>
                                                                       <Col>
                                                                           Avalance
                                                                       </Col>
                                                                   </Row>
                                                               </Col>
                                                           </Row>
                                                        </div>
                                                        <div>
                                                            60,63
                                                        </div>
                                                    </div>
                                                </Row>
                                                <div className="pt-3" style={{ display: "flex",justifyContent: "space-between"}}>
                                                    <Button variant="dark">Deposit</Button>
                                                    <Button variant="outline-secondary">Withdraw</Button>
                                                    <Button>Save</Button>
                                                </div>
                                            </Container>

                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Tab>
                            <Tab eventKey="collectibles" title="Collectibles">

                            </Tab>
                            <Tab eventKey="favorites" title="Favorites" >

                            </Tab>
                            <Tab eventKey="selling" title="Selling">

                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default MyWallet