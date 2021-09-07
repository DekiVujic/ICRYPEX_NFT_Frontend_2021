import {Col, Container, Card, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import cartoon from "../../assets/image/carousel/cartoon.svg";

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
const CategorySectionForYou = props => {

    return (
        <Container style={{height:"45vh"}}>
            <Row className="text-center">
                <Col>
                    For You
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
                            <Card.Img variant="top" src={cartoon} />
                            <Card.Body >
                                <Card.Title>Music</Card.Title>
                                <Row>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodo Doll
                                        </div>
                                        <div>
                                            Icons
                                        </div>
                                    </div>
                                </Row>
                                <Row  className="pt-4">
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            By Gallery New york
                                        </div>
                                        <div>
                                            122
                                        </div>
                                    </div>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodoo Doll #107
                                        </div>
                                        <div>
                                            1.79 USD
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Card.Img variant="top" src={cartoon} />
                            <Card.Body >
                                <Card.Title>Music</Card.Title>
                                <Row>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodo Doll
                                        </div>
                                        <div>
                                            Icons
                                        </div>
                                    </div>
                                </Row>
                                <Row  className="pt-4">
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            By Gallery New york
                                        </div>
                                        <div>
                                            122
                                        </div>
                                    </div>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodoo Doll #107
                                        </div>
                                        <div>
                                            1.79 USD
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Card.Img variant="top" src={cartoon} />
                            <Card.Body >
                                <Card.Title>Music</Card.Title>
                                <Row>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodo Doll
                                        </div>
                                        <div>
                                            Icons
                                        </div>
                                    </div>
                                </Row>
                                <Row  className="pt-4">
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            By Gallery New york
                                        </div>
                                        <div>
                                            122
                                        </div>
                                    </div>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodoo Doll #107
                                        </div>
                                        <div>
                                            1.79 USD
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Card.Img variant="top" src={cartoon} />
                            <Card.Body >
                                <Card.Title>Music</Card.Title>
                                <Row>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodo Doll
                                        </div>
                                        <div>
                                            Icons
                                        </div>
                                    </div>
                                </Row>
                                <Row  className="pt-4">
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            By Gallery New york
                                        </div>
                                        <div>
                                            122
                                        </div>
                                    </div>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodoo Doll #107
                                        </div>
                                        <div>
                                            1.79 USD
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Card.Img variant="top" src={cartoon} />
                            <Card.Body >
                                <Card.Title>Music</Card.Title>
                                <Row>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodo Doll
                                        </div>
                                        <div>
                                            Icons
                                        </div>
                                    </div>
                                </Row>
                                <Row  className="pt-4">
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            By Gallery New york
                                        </div>
                                        <div>
                                            122
                                        </div>
                                    </div>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodoo Doll #107
                                        </div>
                                        <div>
                                            1.79 USD
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Card.Img variant="top" src={cartoon} />
                            <Card.Body >
                                <Card.Title>Music</Card.Title>
                                <Row>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodo Doll
                                        </div>
                                        <div>
                                            Icons
                                        </div>
                                    </div>
                                </Row>
                                <Row  className="pt-4">
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            By Gallery New york
                                        </div>
                                        <div>
                                            122
                                        </div>
                                    </div>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodoo Doll #107
                                        </div>
                                        <div>
                                            1.79 USD
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem', height: '20rem' }} className="text-center">
                            <Card.Img variant="top" src={cartoon} />
                            <Card.Body >
                                <Card.Title>Music</Card.Title>
                                <Row>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodo Doll
                                        </div>
                                        <div>
                                            Icons
                                        </div>
                                    </div>
                                </Row>
                                <Row  className="pt-4">
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            By Gallery New york
                                        </div>
                                        <div>
                                            122
                                        </div>
                                    </div>
                                    <div style={{ display: "flex",justifyContent: "space-between"}}>
                                        <div>
                                            Voodoo Doll #107
                                        </div>
                                        <div>
                                            1.79 USD
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Carousel>
                </Col>
            </Row>
        </Container>

    )
}

export default CategorySectionForYou