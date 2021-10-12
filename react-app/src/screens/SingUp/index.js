import {Fragment, useEffect, useState} from "react";
import {
    Button,
    Col,
    FloatingLabel,
    Form, 
    FormCheck,
    FormControl,
    FormGroup, InputGroup,
    Row
} from "react-bootstrap";
import PasswordStrengthBar from 'react-password-strength-bar';
import { useTranslation } from "react-i18next";
import { dictSignIn } from "../../constants";
import { IconSet } from "../../components/IconSet.jsx";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { registerApi, getCountryCodesApi} from "../../api";


const SignUp = () => {
    const { t } = useTranslation(["common", "login"]);
    const { lang } = useSelector(state => state.ui);
    const [passShown, setPassShown] = useState(false);
    const [repassShown, setRepassShown] = useState(false);
    const [password, setPassword] = useState('');
    const [phoneArea, setPhoneArea] = useState('90');
    const [countryCodesData, setCountryCodesData] = useState([]);

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

    const changePassShown = () => {
        setPassShown(passShown ? false : true);
    };

    const changeRepassShown = () => {
        setRepassShown(repassShown ? false : true);
    };

    const handlePhoneAreaChange = e => {
        setPhoneArea(e.target.value);
    };

    useEffect(() => {
        callCountryCodesApi();
    }, []);

    const callCountryCodesApi = () => {
        getCountryCodesApi(true
        ).then(res => {
            setCountryCodesData(res.data);            
        });
    };
     

    const callRegisterApi = (req) => {
        const values = req.data;
        registerApi({
            name : values.firstname,
            surname: values.surname,
            email : values.email,
            phone : phoneArea + values.phonenumber,
            password : password})
            .then(res => {
                console.log(res);
            });
    };

    const onSubmit = data => {
        clearErrors();
        console.log("onSubmit");
        //TODO
        // call rest api
        callRegisterApi({data});
    };

    return (
        <Fragment>
            <main className="main main-login">
                <section className="loginarea">
                    <div className="container">
                        <div className="loginarea-box signup">
                            <div className="loginarea-headtitle sitecontent sitecontent-title sitecontent-center">
                                <h2>{t("common:signUp")}</h2>
                                <p>{t("common:alreadyHaveAnAccount")} <a href={dictSignIn[lang]}><u>{t("common:signIn")}</u></a></p>
                            </div>
                            <div className="loginarea-darkinfo sitecontent sitecontent-title sitecontent-center">
                                <h4>{t("common:oneAccountTwoPlatforms")}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                <div className="logoarea textusernotselect">
                                    <div className="logoarea-item"><img src="../assets/img/content/login_form_logo_icrypex_nft.svg"/></div>
                                    <div className="logoarea-item"><img src="../assets/img/content/login_form_logo_icrypex.svg"/></div>
                                </div>
                            </div>
                            <div className="loginarea-form">
                                <Form className="siteform"
                                    autoComplete="off"
                                    noValidate
                                    onSubmit={handleSubmit(onSubmit)}>
                                    <div className="formfieldset">
                                        <Row className="g-3">
                                            <Col className="col-lg">
                                                <FloatingLabel className="form-group" label={t("login:firstname")}>
                                                    <FormControl size="lg" 
                                                        type="text"
                                                        name="firstname"
                                                        placeholder={t("login:firstname")}
                                                        aria-invalid={errors.firstname ? "true" : "false"}
                                                        {...register('firstname', { required: true })} />
                                                    {errors.firstname && (
                                                        <Form.Text className="text-muted">
                                                            {t("form:isRequired")}
                                                        </Form.Text>
                                                    )}
                                                </FloatingLabel>
                                            </Col>
                                            <Col className="col-lg">
                                                <FloatingLabel className="form-group" label={t("login:surname")}>
                                                    <FormControl size="lg" 
                                                        type="text"
                                                        name="surname"
                                                        placeholder={t("login:surname")}
                                                        aria-invalid={errors.surname ? "true" : "false"}
                                                        {...register('surname', { required: true })} />
                                                    {errors.surname && (
                                                        <Form.Text className="text-muted">
                                                            {t("form:isRequired")}
                                                        </Form.Text>
                                                    )}
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <FloatingLabel className="form-group" label={t("login:username")}>
                                            <FormControl size="lg" 
                                                type="text"
                                                name="username"
                                                placeholder={t("login:username")}
                                                aria-invalid={errors.username ? "true" : "false"}
                                                {...register('username', { required: true })}/>
                                            {errors.username && (
                                                <Form.Text className="text-muted">
                                                    {t("form:isRequired")}
                                                </Form.Text>
                                            )}
                                        </FloatingLabel>
                                        <FormGroup className="form-group phonearea">
                                            <InputGroup>
                                                <FloatingLabel className="input-group-append" label={t("login:phone")}>
                                                    <Form.Select 
                                                        className="form-select-lg"
                                                        name="phonearea"
                                                        value={phoneArea}
                                                        onChange={handlePhoneAreaChange}>
                                                        {countryCodesData.map((val, index) => {
                                                            return <option key={val.country_code}>{val.country_code}</option>
                                                        })}
                                                    </Form.Select>
                                                    {errors.phonearea && (
                                                        <Form.Text className="text-muted">
                                                            {t("form:isRequired")}
                                                        </Form.Text>
                                                    )}
                                                </FloatingLabel>
                                                <FloatingLabel className="col" label={t("login:phone")}>
                                                    <FormControl size="lg"
                                                        type="text"
                                                        name="phonenumber"
                                                        placeholder={t("login:phone")}
                                                        aria-invalid={errors.phonenumber ? "true" : "false"}
                                                        {...register('phonenumber', { required: true })}/>
                                                    {errors.phonenumber && (
                                                        <Form.Text className="text-muted">
                                                            {t("form:isRequired")}
                                                        </Form.Text>
                                                    )}
                                                </FloatingLabel>
                                            </InputGroup>
                                        </FormGroup>
                                        <FloatingLabel className="form-group" label={t("login:email")}>
                                            <FormControl size="lg"
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
                                        </FloatingLabel>
                                        <FloatingLabel className="form-group showhidepass" label={t("login:password")}>
                                            <FormControl size="lg" 
                                                type={passShown ? "text" : "password"}
                                                name="pass"
                                                placeholder={t("login:password")}
                                                aria-invalid={errors.pass ? "true" : "false"}
                                                value={password}
                                                onChange={e => setPassword(e.target.value)} />                                            
                                            <Button className="showhidebtn" onClick={changePassShown}>
                                                <IconSet sprite="btnssmclrd" 
                                                    size="24" 
                                                    name={passShown ? "eyehide" : "eyeshow"} />
                                            </Button>
                                        </FloatingLabel>
                                        <PasswordStrengthBar password={password} />
                                        <FloatingLabel className="form-group showhidepass" label="Confirm Password">
                                            <FormControl size="lg" 
                                                type={repassShown ? "text" : "password"}
                                                name="repass"
                                                placeholder={t("login:confirmPassword")}
                                                aria-invalid={errors.repass ? "true" : "false"}
                                                {...register('repass', { required: true })}/>
                                            {errors.repass && (
                                                <Form.Text className="text-muted">
                                                    {t("form:isRequired")}
                                                </Form.Text>
                                            )}
                                            <Button className="showhidebtn" onClick={changeRepassShown}>
                                                <IconSet sprite="btnssmclrd" 
                                                    size="24"
                                                    name={repassShown ? "eyehide" : "eyeshown"} />
                                            </Button>
                                        </FloatingLabel>
                                        <FormGroup className="form-group checkboxarea">
                                            <FormCheck className="form-check recaptcha">
                                                <div className="recaptcha-area d-flex">
                                                    <div className="recaptcha-check">
                                                        <div className="g-recaptcha" data-theme="dark" data-sitekey="6LewOKAUAAAAAMDO2yohWeyDcjFAHfcuEqK2mIp4"></div>
                                                    </div>
                                                    <label>I'm not a robot</label>
                                                </div>
                                            </FormCheck>
                                            <Form.Check type="checkbox" label={t("login:readAndAgreeClick")} />
                                            <Form.Check type="checkbox" label={t("login:readAndAgreeNews")} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Button className="w-100" size="lg" variant="primary" type="submit">{t("common:signUp")}</Button>
                                        </FormGroup>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* <Container className="justify-content-center pt-5 d-none" style={{ height: "80rem" }}>
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
                                                                {countryCodesData.map((val, index) => {
                                                                    return <option key={val.country_code}>{val.country_code}</option>
                                                                })}
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
            </Container> */}

        </Fragment>
    )
}

export default SignUp