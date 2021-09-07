import {Navbar, Nav, Button} from "react-bootstrap";

import {ReactComponent as ReactLogo} from '../../assets/image/logo.svg';
const Header = props => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <ReactLogo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Marketplace</Nav.Link>
                        <Nav.Link href="#pricing">My NFT's</Nav.Link>
                        <Nav.Link href="#pricing">Help Center</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="dark">Sign In</Button>
                        <Button>Sign Up</Button>

                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;