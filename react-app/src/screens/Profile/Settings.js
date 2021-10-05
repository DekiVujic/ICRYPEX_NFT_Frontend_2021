import {Button, Card, Col, Container, FloatingLabel, Form, Row,} from "react-bootstrap";

const Settings = props => {
    return (
        <Card style={{ width: '100%', height: '100vh' }} className="text-start">
            <Card.Body >
                <Container className="justify-content-center" style={{height:"100vh"}}>
            <Row className="justify-content-md-center" >
                <Col xs lg="6" className="mb-2">
                    Profile
                </Col>
            </Row>
            <Row className="justify-content-md-center">
             <Col xs lg="6" className="mb-2">
                 <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Fist Name</Form.Label>
                         <Form.Control type="text" placeholder="First Name" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Last Name</Form.Label>
                         <Form.Control type="text" placeholder="Last Name" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Display Name</Form.Label>
                         <Form.Control type="text" placeholder="Display Name" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" placeholder="Enter email" />
                         <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                         </Form.Text>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Bio</Form.Label>
                         <FloatingLabel controlId="floatingTextarea2" label="Bio">
                             <Form.Control
                                 as="textarea"
                                 placeholder="Bio"
                                 style={{ height: '100px' }}
                             />
                         </FloatingLabel>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Instagram</Form.Label>
                         <Form.Control type="text" placeholder="Instagram" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Facebook</Form.Label>
                         <Form.Control type="text" placeholder="Facebook" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Twitter</Form.Label>
                         <Form.Control type="text" placeholder="Twitter" />
                     </Form.Group>
                     <Button variant="primary" type="submit" >
                         Save
                     </Button>
                 </Form>
             </Col>
            </Row>
        </Container>
            </Card.Body>
        </Card>
    )
}

export default Settings