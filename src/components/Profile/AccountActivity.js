import {Card, Container, Tab, Table, Tabs} from "react-bootstrap";

const AccountActivity = props => {
    return (
        <Card style={{ width: '100%', height: '70vh' }} className="text-center">
            <Card.Body >
                <Tabs defaultActiveKey="balance_history" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="balance_history" title="Balance History">
                        <Container style={{height:"70vh"}}>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Edition</th>
                                    <th>Item</th>
                                    <th>Buyer</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>05.06.201</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </Tab>
                    <Tab eventKey="purchase_history" title="Purchase History" >
                         <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Order</th>
                                <th>Edition</th>
                                <th>Item</th>
                                <th>Seller</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>05.06.201</td>
                                <td>Lorem Ipsum</td>
                                <td>Lorem Ipsum</td>
                                <td>Lorem Ipsum</td>
                                <td>Lorem Ipsum</td>
                                <td>Lorem Ipsum</td>
                                <td>Lorem Ipsum</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="my_bids" title="My Bid's">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Item</th>
                                <th>Highest Bid</th>
                                <th>Your Bid</th>
                                <th>Time Left</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>Lorem Ipsum</td>
                                <td>Lorem Ipsum</td>
                                <td>Lorem Ipsum</td>
                                <td>Lorem Ipsum</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}

export  default AccountActivity