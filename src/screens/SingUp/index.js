import {Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {dictSignIn} from "../../routes";
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";


const SignUp = () => {
    const { t } = useTranslation(["common","login"]);
    const { lang } = useSelector(state => state.ui);
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = data => {
        clearErrors();
        console.log("onSubmit")
        //TODO
        // call rest api
    };

    return (
        <Container className="justify-content-center pt-5" style={{height:"80rem"}}>
            <Row className="justify-content-md-center">
                <Card style={{ width: '35rem', height: '65rem' }} className="text-center">
                    <Card.Body >
                        <Container style={{height:"70vh"}}>
                            <Row className="justify-content-center">
                                <Col>
                                    {t("common:signUp")}
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    {t("common:alreadyHaveAnAccount")}? <a href={dictSignIn[lang]}>{t("common:signIn")}</a>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col>
                                    <Card  style={{ width: '30rem', height: '15vh', color:'white' }} className="text-center"  bg="dark">
                                        <Card.Body >
                                            <Container style={{height:"70vh"}}>
                                                <Row className="justify-content-center">
                                                    <Col>
                                                        {t("common:oneAccountTwoPlatforms")}
                                                    </Col>
                                                </Row>
                                                <Row className="justify-content-center">
                                                    <Col>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,

                                                    </Col>
                                                </Row>
                                                <Row className="justify-content-center">
                                                    <Col>
                                                        {t("common:signUp")}
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="justify-content-center text-start">
                                <Col>
                                    <Form autoComplete="off"
                                          noValidate
                                          onSubmit={handleSubmit(onSubmit)}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>{t("login:firstname")}</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="firstname"
                                                placeholder={t("login:firstname")}
                                                aria-invalid={errors.firstname ? "true" : "false"}
                                                {...register('firstname', { required: true })}/>
                                            {errors.firstname && (
                                                <Form.Text className="text-muted">
                                                    {t("form:isRequired")}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>{t("login:surname")}</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="surname"
                                                placeholder={t("login:surname")}
                                                aria-invalid={errors.surname ? "true" : "false"}
                                                {...register('firstname', { required: true })}/>
                                            {errors.surname && (
                                                <Form.Text className="text-muted">
                                                    {t("form:isRequired")}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>{t("login:displayName")}</Form.Label>
                                            <Form.Control type="text" placeholder={t("login:displayName")} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>{t("login:userName")}</Form.Label>
                                            <Form.Control type="text" placeholder={t("login:userName")} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>{t("login:email")}</Form.Label>
                                            <Form.Control type="email" placeholder={t("login:email")} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>{t("login:password")}</Form.Label>
                                            <Form.Control type="password" placeholder={t("login:password")} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>{t("login:confirmPassword")}</Form.Label>
                                            <Form.Control type="password" placeholder={t("login:confirmPassword")} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label={t("login:readAndAgreeClick")} />
                                        </Form.Group>
                                        <div className="d-grid gap-2">
                                            <Button variant="primary" type="submit" size="lg">
                                                {t("common:signUp")}
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

export default SignUp