import {Col, Container, Card, Button, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import cartoon from '../../assets/image/carousel/cartoon.svg';

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
const CategorySectionOne = props => {

    return (
        <Container style={{height:"55vh"}}>
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
                        <div>
                            <Card style={{ width: '25rem', height: '25rem' }} className="text-center">
                                <Card.Img variant="top" src={cartoon} />
                                <Card.Body >
                                    <Card.Title>Music</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                    </Card.Text>
                                    <Button variant="primary">Start Collecting</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: '25rem', height: '25rem'  }} className="text-center">
                                <Card.Img variant="top" src={cartoon} />
                                <Card.Body>
                                    <Card.Title>Music</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                    </Card.Text>
                                    <Button variant="primary">Start Collecting</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: '25rem', height: '25rem'  }} className="text-center">
                                <Card.Img variant="top" src={cartoon} />
                                <Card.Body>
                                    <Card.Title>Music</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                    </Card.Text>
                                    <Button variant="primary">Start Collecting</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: '25rem', height: '25rem'  }} className="text-center">
                                <Card.Img variant="top" src={cartoon} />
                                <Card.Body>
                                    <Card.Title>Music</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                    </Card.Text>
                                    <Button variant="primary">Start Collecting</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: '25rem', height: '25rem'  }} className="text-center">
                                <Card.Img variant="top" src={cartoon} />
                                <Card.Body>
                                    <Card.Title>Music</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                    </Card.Text>
                                    <Button variant="primary">Start Collecting</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: '25rem', height: '25rem'  }} className="text-center">
                                <Card.Img variant="top" src={cartoon} />
                                <Card.Body>
                                    <Card.Title>Music</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                    </Card.Text>
                                    <Button variant="primary">Start Collecting</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ width: '25rem', height: '25rem'  }} className="text-center">
                                <Card.Img variant="top" src={cartoon} />
                                <Card.Body>
                                    <Card.Title>Music</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
                                    </Card.Text>
                                    <Button variant="primary">Start Collecting</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </Container>

    )
}

export default CategorySectionOne