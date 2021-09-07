import {Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

const Footer = props => {
    return (
        <Container className="justify-content-center" style={{height:"40vh"}}>
            <Row className="justify-content-md-center">
                <Col xs lg="6" className="text-center mb-2">
                    Auction
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Email Address"
                            aria-label="Email Address"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    News
                </Col>
                <Col xs lg="2" className="text-start">
                    Map
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    Create
                </Col>
                <Col xs lg="2" className="text-start">
                    Sand
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    Market
                </Col>
                <Col xs lg="2" className="text-start">
                    Pres
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    Play
                </Col>
                <Col xs lg="2" className="text-start">
                    Terms of Use
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    White Paper
                </Col>
                <Col xs lg="2" className="text-start">
                    One Pager
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    FAQ
                </Col>
                <Col xs lg="2" className="text-start">
                    About Us
                </Col>
            </Row>

        </Container>
    )
}

export default  Footer