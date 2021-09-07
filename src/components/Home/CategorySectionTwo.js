import {Col, Container, Card, Row, Image} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import created from '../../assets/image/carousel/created.svg';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const CategorySectionTwo = props => {

    return (
        <Container style={{height:"40vh"}}>
            <Row className="text-center">
                <Col>
                    Trending in all categories
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel responsive={responsive}>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Col>
                                <Image  src={created} roundedCircle  />
                            </Col>
                            <Card.Body >
                                <Card.Title>52,645</Card.Title>
                                <Card.Title>Sales Today</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Col>
                                <Image  src={created} roundedCircle  />
                            </Col>
                            <Card.Body >
                                <Card.Title>52,645</Card.Title>
                                <Card.Title>Sales Today</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Col>
                                <Image  src={created} roundedCircle  />
                            </Col>
                            <Card.Body >
                                <Card.Title>52,645</Card.Title>
                                <Card.Title>Sales Today</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Col>
                                <Image  src={created} roundedCircle  />
                            </Col>
                            <Card.Body >
                                <Card.Title>52,645</Card.Title>
                                <Card.Title>Sales Today</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Col>
                                <Image  src={created} roundedCircle  />
                            </Col>
                            <Card.Body >
                                <Card.Title>52,645</Card.Title>
                                <Card.Title>Sales Today</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Col>
                                <Image  src={created} roundedCircle  />
                            </Col>
                            <Card.Body >
                                <Card.Title>52,645</Card.Title>
                                <Card.Title>Sales Today</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Col>
                                <Image  src={created} roundedCircle  />
                            </Col>
                            <Card.Body >
                                <Card.Title>52,645</Card.Title>
                                <Card.Title>Sales Today</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel>

                </Col>
            </Row>
        </Container>

    )
}

export default CategorySectionTwo