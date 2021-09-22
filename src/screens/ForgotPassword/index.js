import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { dictSignIn } from "../../constants";
import { useForm } from "react-hook-form";


const ForgotPassword = () => {
    const { t } = useTranslation(["common", "login"]);
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
        <Container className="justify-content-center pt-5" style={{ height: "100vh" }}>
            <Row className="justify-content-md-center">
                <Card style={{ width: '35rem', height: '250px' }} className="text-center">
                    <Card.Body >
                        <Container>
                            <Row className="justify-content-center">
                                <Col>
                                    {t("login:forgotPassword")}
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    {t("common:alreadyHaveAnAccount")}? <a href={dictSignIn[lang]}>{t("common:signIn")}</a>
                                </Col>
                            </Row>
                            <Row className="justify-content-center text-start">
                                <Col>
                                    <Form autoComplete="off"
                                        noValidate
                                        onSubmit={handleSubmit(onSubmit)}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>{t("login:email")}</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder={t("login:email")}
                                                aria-invalid={errors.email ? "true" : "false"}
                                                {...register('email', { required: true })} />
                                            {errors.email && (
                                                <Form.Text className="text-muted">
                                                    {t("form:isRequired")}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                        <div className="d-grid gap-2">
                                            <Button variant="primary" type="submit" size="lg">
                                                {t("common:send")}
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

export default ForgotPassword