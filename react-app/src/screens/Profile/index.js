import {Col, Container, Row } from "react-bootstrap";
import Setting from "./Setting";
import SettingLeftMenu from "./SettingLeftMenu";


const Profile = props => {
    return(
        <Container>
            <Row>
                <Col xs lg="3" >
                    <SettingLeftMenu />
                </Col>
                <Col xs lg="9">
                <Setting />
                </Col>
            </Row>
        </Container>
    )
}

export default  Profile