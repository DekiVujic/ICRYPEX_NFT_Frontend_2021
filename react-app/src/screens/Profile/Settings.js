import {Fragment, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import {Button, Card, Col, Container, FloatingLabel, Form, Row,    
    FormCheck,
    FormControl,
    FormGroup, 
    InputGroup,
    } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Settings = props => {
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
            firstname:"",
            surname:"",
            username:"",
            email:"",
            fullname:"",
            insaccount:"",
            fbaccount:"",
            twtaccount:""
        },
    });

    const onSubmit = data => {
        clearErrors();
        console.log("onSubmit");
        //TODO
        // call rest api
    };

    return (
        <Fragment>
            <main className="main main-login">
                <section className="loginarea">
                    <div className="container">
                        <div className="loginarea-box signup">
                            <div className="loginarea-headtitle sitecontent sitecontent-title sitecontent-center">
                                <h3>{t("common:signUp")}</h3>
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
                                        <FloatingLabel className="form-group" label={t("login:fullname")}>
                                            <FormControl size="lg"
                                                className="form-control-lg"
                                                type="textarea"
                                                name="fullname"
                                                placeholder={t("login:fullname")}
                                                aria-invalid={errors.fullname ? "true" : "false"}
                                                {...register('fullname', { required: true })} />
                                            {errors.fullname && (
                                                <Form.Text className="text-muted">
                                                    {t("form:isRequired")}
                                                </Form.Text>
                                            )}
                                        </FloatingLabel>
                                        <div className="loginarea-headtitle sitecontent sitecontent-title sitecontent-center">
                                            <h3>{t("common:socialMedia")}</h3>
                                        </div>
                                        <FloatingLabel className="form-group" label={t("common:instagram")}>
                                            <FormControl size="lg" 
                                                type="text"
                                                name="insaccount"
                                                placeholder={t("common:instagram")}
                                                {...register('insaccount', { required: true })}/>                                            
                                        </FloatingLabel>
                                        <FloatingLabel className="form-group" label={t("common:facebook")}>
                                            <FormControl size="lg" 
                                                type="text"
                                                name="fbaccount"
                                                placeholder={t("common:facebook")}
                                                {...register('fbaccount', { required: true })}/>                                            
                                        </FloatingLabel>
                                        <FloatingLabel className="form-group" label={t("common:twitter")}>
                                            <FormControl size="lg" 
                                                type="text"
                                                name="twtaccount"
                                                placeholder={t("common:twitter")}
                                                {...register('twtaccount', { required: true })}/>                                            
                                        </FloatingLabel>
                                        <FormGroup>
                                            <Button className="w-100" size="lg" variant="primary" type="submit">{t("common:save")}</Button>
                                        </FormGroup>
                                    </div>
                                </Form>
                            </div>                           
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>






























        // <Card style={{ width: '100%', height: '100vh' }} className="text-start">
        //     <Card.Body >
        //         <Container className="justify-content-center" style={{height:"100vh"}}>
        //             <Row className="justify-content-md-center" >
        //                 <Col xs lg="6" className="mb-2">
        //                     Profile
        //                 </Col>
        //             </Row>
        //             <Row className="justify-content-md-center">
        //                 <Col xs lg="6" className="mb-2">
        //                     <Form>
        //                         <Form.Group className="mb-3" controlId="formBasicE mail">
        //                             <Form.Label>Fist Name</Form.Label>
        //                             <Form.Control type="text" placeholder="First Name" />
        //                         </Form.Group>
        //                         <Form.Group className="mb-3" controlId="formBasicEmail">
        //                             <Form.Label>Last Name</Form.Label>
        //                             <Form.Control type="text" placeholder="Last Name" />
        //                         </Form.Group>
        //                         <Form.Group className="mb-3" controlId="formBasicEmail">
        //                             <Form.Label>Display Name</Form.Label>
        //                             <Form.Control type="text" placeholder="Display Name" />
        //                         </Form.Group>
        //                         <Form.Group className="mb-3" controlId="formBasicEmail">
        //                             <Form.Label>Email address</Form.Label>
        //                             <Form.Control type="email" placeholder="Enter email" />
        //                             <Form.Text className="text-muted">
        //                                 We'll never share your email with anyone else.
        //                             </Form.Text>
        //                         </Form.Group>
        //                         <Form.Group className="mb-3" controlId="formBasicEmail">
        //                             <Form.Label>Bio</Form.Label>
        //                             <FloatingLabel controlId="floatingTextarea2" label="Bio">
        //                                 <Form.Control
        //                                     as="textarea"
        //                                     placeholder="Bio"
        //                                     style={{ height: '100px' }}
        //                                 />
        //                             </FloatingLabel>
        //                         </Form.Group>
        //                         <Form.Group className="mb-3" controlId="formBasicEmail">
        //                             <Form.Label>Instagram</Form.Label>
        //                             <Form.Control type="text" placeholder="Instagram" />
        //                         </Form.Group>
        //                         <Form.Group className="mb-3" controlId="formBasicEmail">
        //                             <Form.Label>Facebook</Form.Label>
        //                             <Form.Control type="text" placeholder="Facebook" />
        //                         </Form.Group>
        //                         <Form.Group className="mb-3" controlId="formBasicEmail">
        //                             <Form.Label>Twitter</Form.Label>
        //                             <Form.Control type="text" placeholder="Twitter" />
        //                         </Form.Group>
        //                         <Button variant="primary" type="submit" >
        //                             Save
        //                         </Button>
        //                     </Form>
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </Card.Body>
        // </Card>
    )
}

export default Settings