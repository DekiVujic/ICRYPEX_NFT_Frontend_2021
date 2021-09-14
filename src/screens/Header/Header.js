import {Navbar, Nav, Button} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {ReactComponent as ReactLogo} from '../../assets/image/logo.svg';


const Header = props => {
    const { t } = useTranslation(["common", "menu"]);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <ReactLogo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">{t("menu:marketplace")}</Nav.Link>
                        <Nav.Link href="#pricing">{t("menu:myNfts")}</Nav.Link>
                        <Nav.Link href="#pricing">{t("menu:helpCenter")}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="dark">{t("common:signIn")}</Button>
                        <Button>{t("common:signUp")}</Button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;