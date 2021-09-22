import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { dictAboutUs, dictFaq, dictSignIn } from "../../constants";
import { useSelector } from "react-redux";

const Footer = () => {
    const { t } = useTranslation(["common"]);
    const { lang } = useSelector(state => state.ui);
    return (
        <Container className="justify-content-center" style={{ height: "40vh" }}>
            <Row className="justify-content-md-center">
                <Col xs lg="6" className="text-center mb-2">
                    {t("common:auction")}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Email Address"
                            aria-label="Email Address"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">{t("common:subscribe")}</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    {t("common:news")}
                </Col>
                <Col xs lg="2" className="text-start">
                    {t("common:map")}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    {t("common:create")}
                </Col>
                <Col xs lg="2" className="text-start">
                    {t("common:send")}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    {t("common:market")}
                </Col>
                <Col xs lg="2" className="text-start">
                    {t("common:pres")}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    {t("common:play")}
                </Col>
                <Col xs lg="2" className="text-start">
                    {t("common:termsOfUse")}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    {t("common:whitePager")}
                </Col>
                <Col xs lg="2" className="text-start">
                    {t("common:onePager")}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-end">
                    <a href={dictFaq[lang]}>{t("common:faq")}</a>
                </Col>
                <Col xs lg="2" className="text-start">
                    <a href={dictAboutUs[lang]}>{t("common:aboutUs")}</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer