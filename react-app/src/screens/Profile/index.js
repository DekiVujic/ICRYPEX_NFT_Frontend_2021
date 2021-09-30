import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import ProfileLeftMenu from "./ProfileLeftMenu";
import MyWallet from "./MyWallet"
import AccountActivity from "./AccountActivity";
import MyNfts from "./MyNfts";
import Settings from "./Settings";
import { dictMyWallet, dictAccActivities, dictMyNfts, dictSettings } from "../../constants";

function Profile(props) {
    const { lang } = useSelector(state => state.ui);

    console.log(window.location);
    return (
        <Container>
            <Row>
                <Col xs lg="3" >
                    <ProfileLeftMenu />
                </Col>
                <Col xs lg="9">
                    {
                        window.location.pathname === dictMyWallet[lang] ? (
                            <MyWallet />
                        ) : null
                    }
                    {
                        window.location.pathname === dictAccActivities[lang] ? (
                            <AccountActivity />
                        ) : null
                    }
                    {
                        window.location.pathname === dictMyNfts[lang] ? (
                            <MyNfts />
                        ) : null
                    }
                    {
                        window.location.pathname === dictSettings[lang] ? (
                            <Settings />
                        ) : null
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Profile