import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {dictForgotPassword, dictSignUp} from "../../routes";


const SignIn = () => {
    const { t } = useTranslation(["common","login"]);
    const { lang } = useSelector(state => state.ui);
    return (
        <Container className="justify-content-center pt-5" style={{height:"100vh"}}>
            <Row className="justify-content-md-center">
                <Card style={{ width: '35rem', height: '450px' }} className="text-center">
                    <Card.Body >
                        <Container>
                            <Row className="justify-content-center">
                                <Col>
                                    {t("common:signIn")}
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    {t("login:dontHaveAnAccountYet")} <a href={dictSignUp[lang]}>{t("common:signUp")}</a>
                                </Col>
                            </Row>
                            <Row className="justify-content-center text-start">
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>{t("login:userName")}</Form.Label>
                                            <Form.Control type="text" placeholder={t("login:userName")} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>{t("login:email")}</Form.Label>
                                            <Form.Control type="email" placeholder={t("login:email")} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>{t("login:password")}</Form.Label>
                                            <Form.Control type="password" placeholder={t("login:password")} />
                                        </Form.Group>
                                        <Form.Group className="mb-3 text-end">
                                            <a href={dictForgotPassword[lang]} > {t("login:forgotPassword")}  ?</a>
                                        </Form.Group>
                                        <div className="d-grid gap-2">
                                            <Button variant="primary" type="submit" size="lg">
                                                {t("common:signIn")}
                                            </Button>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default SignIn