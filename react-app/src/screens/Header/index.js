import { Navbar, Nav, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ReactComponent as ReactLogo } from '../../assets/image/logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { dictSignIn, dictSignUp,dictMyNfts, dictProfile } from "../../constants";
import { getLocalePath } from "../../routes"
import { setLanguage } from "../../state/slices/ui.slice";
import { useCallback } from "react";


const Header = props => {
    const { t } = useTranslation(["common", "menu"]);
    const { lang } = useSelector(state => state.ui);
    const dispatch = useDispatch();
    const changeLanguage = useCallback(
        async lang => {
            await dispatch(setLanguage(lang));
            const newPath = getLocalePath(window.location.pathname, lang);
            if (newPath) window.location.pathname = newPath;
        },
        [dispatch]
    );
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <ReactLogo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">{t("menu:marketplace")}</Nav.Link>
                    <Nav.Link href={dictMyNfts[lang]}>{t("menu:myNfts")}</Nav.Link>
                    <Nav.Link href="#pricing">{t("menu:helpCenter")}</Nav.Link>
                    <Nav.Link href={dictProfile[lang]}>{t("menu:profile")}</Nav.Link>
                </Nav>
                <Nav>
                    {
                        window.location.pathname === '/' ? (
                            <Button variant="dark" onClick={() => changeLanguage(lang === "tr" ? "en" : "tr")} >{lang === "tr" ? t("common:english") : t("common:turkish")}</Button>
                        ) : null
                    }
                    <Button variant="dark" href={dictSignIn[lang]}>{t("common:signIn")}</Button>
                    <Button href={dictSignUp[lang]}>{t("common:signUp")}</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;