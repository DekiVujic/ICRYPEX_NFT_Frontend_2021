import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import PasswordStrengthBar from 'react-password-strength-bar';
import { useTranslation } from "react-i18next";
import icrypexNft from "../../assets/img/content/login_form_logo_icrypex.svg";
import { dictSignIn } from "../../constants";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { registerApi } from "../../api";


const SignUp = () => {
    const { t } = useTranslation(["common", "login"]);
    const { lang } = useSelector(state => state.ui);
    const [password, setPassword] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            firstname:"",
            surname:"",
            username:"",
            phonearea:"",
            phonenumber:"",
            email: ""
        },
    });

    const callRegisterApi = (req) => {
        registerApi({
            name : req.data.firstname,
            surname: req.data.surname,
            email : req.data.email,
            phone : req.data.phonenumber,
            password:password})
            .then(res => {
                console.log(res);
            });
    }

    const onSubmit = data => {
        clearErrors();
        console.log("onSubmit");
        //TODO
        // call rest api
        callRegisterApi({data});
    };

    return (
        <Container className="justify-content-center pt-5" style={{ height: "80rem" }}>
            <Row className="justify-content-md-center">
                <Card style={{ width: '35rem', height: '65rem' }} className="text-center">
                    <Card.Body >
                        <Container style={{ height: "70vh" }}>                            
                            <Row className="loginarea-headtitle sitecontent sitecontent-title sitecontent-center">
                                <Col>
                                <h2>{t("common:signUp")}</h2>
                                </Col>
                            </Row>
                            <Row className="loginarea-darkinfo sitecontent sitecontent-title sitecontent-center">
                                    <h4>{t("common:alreadyHaveAnAccount")}</h4><a href={dictSignIn[lang]}>{t("common:signIn")}</a>
                               
                            </Row>
                            <Row className="justify-content-center">
                                <Col>
                                    <Card style={{ width: '28rem', height: '15vh', color: 'white' }} className="text-center" bg="dark">
                                        <Card.Body >
                                            <Container style={{ height: "10vh" }}>
                                                <Row className="justify-content-center">
                                                    <Col>
                                                        <h4>{t("common:oneAccountTwoPlatforms")}</h4>
                                                    </Col>
                                                </Row>
                                                <Row className="justify-content-center">
                                                    <Col>
                                                        <icrypexNft/>
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
                                        <Row>
                                            <Col>
                                                <Form.Group className="form-floating" controlId="formBasicEmail">
                                                    <Form.Control
                                                        type="text"
                                                        name="firstname"
                                                        placeholder={t("login:firstname")}
                                                        aria-invalid={errors.firstname ? "true" : "false"}
                                                        {...register('firstname', { required: true })} />
                                                    <Form.Label>{t("login:firstname")}</Form.Label>
                                                    {errors.firstname && (
                                                        <Form.Text className="text-muted">
                                                            {t("form:isRequired")}
                                                        </Form.Text>
                                                    )}
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="form-floating" controlId="formBasicEmail">
                                                    <Form.Control
                                                        type="text"
                                                        name="surname"
                                                        placeholder={t("login:surname")}
                                                        aria-invalid={errors.surname ? "true" : "false"}
                                                        {...register('surname', { required: true })} />
                                                    <Form.Label>{t("login:surname")}</Form.Label>
                                                    {errors.surname && (
                                                        <Form.Text className="text-muted">
                                                            {t("form:isRequired")}
                                                        </Form.Text>
                                                    )} 
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="form-floating" controlId="formBasicEmail">                                            
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                placeholder={t("login:username")}
                                                aria-invalid={errors.username ? "true" : "false"}
                                                {...register('username', { required: true })}/>
                                            <Form.Label>{t("login:userName")}</Form.Label>
                                            {errors.username && (
                                                <Form.Text className="text-muted">
                                                    {t("form:isRequired")}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                        <Row>
                                            <Col>
                                                <Form.Group className="phonearea" controlId="formBasicEmail">
                                                    <Form.Floating controlId="floatingSelect" >
                                                        <Form.Select name="phonearea" aria-label="Floating label select example">
                                                            <option>+90</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                        <Form.Label>{t("login:phone")}</Form.Label>
                                                        {errors.phonearea && (
                                                            <Form.Text className="text-muted">
                                                                {t("form:isRequired")}
                                                            </Form.Text>
                                                        )}
                                                    </Form.Floating>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Floating className="col" controlId="formBasicEmail">                                            
                                                    <Form.Control
                                                        type="text"
                                                        name="phonenumber"
                                                        placeholder={t("login:phone")}
                                                        aria-invalid={errors.phonenumber ? "true" : "false"}
                                                        {...register('phonenumber', { required: true })}/>
                                                    <Form.Label>{t("login:phone")}</Form.Label>
                                                    {errors.phonenumber && (
                                                        <Form.Text className="text-muted">
                                                            {t("form:isRequired")}
                                                        </Form.Text>
                                                    )}
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Form.Group className="form-floating" controlId="formBasicEmail">                                            
                                            <Form.Control 
                                                type="email"
                                                name="email"
                                                placeholder={t("login:email")}
                                                aria-invalid={errors.email ? "true" : "false"}
                                                {...register('email', { required: true })} />
                                            <Form.Label>{t("login:email")}</Form.Label>
                                            {errors.email && (
                                                <Form.Text className="text-muted">
                                                    {t("form:isRequired")}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                        <Form.Group className="form-floating showhidepass" controlId="formBasicEmail">                                            
                                            <Form.Control
                                                type="password"
                                                name="pass"
                                                placeholder={t("login:password")}
                                                aria-invalid={errors.pass ? "true" : "false"}
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                // {...register('pass', { required: true })}
                                                />
                                            <Form.Label>{t("login:password")}</Form.Label>
                                            <PasswordStrengthBar password={password} />
                                            {password && (
                                                <Form.Text className="text-muted">
                                                    {t("form:isRequired")}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                        <Form.Group className="form-floating showhidepass" controlId="formBasicEmail">                                            
                                            <Form.Control
                                                type="password"
                                                name="repass"
                                                placeholder={t("login:confirmPassword")}
                                                aria-invalid={errors.repass ? "true" : "false"}
                                                {...register('repass', { required: true })}/>
                                            <Form.Label>{t("login:confirmPassword")}</Form.Label>
                                            {errors.repass && (
                                                <Form.Text className="text-muted">
                                                    {t("form:isRequired")}
                                                </Form.Text>
                                            )}
                                            {/* <Button className="showhidebtn" type="button">btn</Button> */}
                                        </Form.Group>
                                        <Form.Group className="checkboxarea" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label={t("login:readAndAgreeClick")} />
                                            <Form.Check type="checkbox" label={t("login:readAndAgreeNews")} />
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