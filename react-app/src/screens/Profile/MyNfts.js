import {Card, Container, Tab, Tabs} from "react-bootstrap";

import add_new_nft_card from "../../assets/image/add_new_nft_card.svg";


const MyNfts = props => {
    return (
        <Card style={{ width: '100%', height: '70vh' }} className="text-center">
            <Card.Body >
                <Tabs defaultActiveKey="created" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="created" title="Created">
                        <Container style={{height:"70vh"}}>
                            <Card style={{ width: '15rem', height: '20rem'  }} className="text-center">
                             <Card.Header style={{ width: '15rem', height: '15rem'  }}>
                                 <Card.Img variant="center" src={add_new_nft_card} style={{ width: '12rem', height: '15rem'  }} />
                             </Card.Header>
                                <Card.Body>
                                    <Card.Title>Create New NFT</Card.Title>

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
    )
}

export default MyNfts