import { useEffect, useState } from "react";
import { dictSignIn } from "../../constants";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {Button, Card, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import add_new_nft_card from "../../assets/image/add_new_nft_card.svg";


const NftCreate = props => {
    const { t } = useTranslation(["common", "login"]);
    const { lang } = useSelector(state => state.ui);
    const [amount, setAmount] = useState();
    const nftType = [
        {label: "Art", value: "Art" },
        {label: "Music", value: "Music"},
        {label: "Collectibles", value: "Collectibles"}
    ];
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

    const handleOnChange = (e) => {
        setAmount(e.target.value);
        console.log(amount);
    };

    // const handleIncrement = () => {
    //     if(amount){
    //     // if(amount < 500)
    //         setAmount(amount => amount + 1);}
    //     else{
    //         setAmount(1);
    //     }
    // };
      
    // const handleDecrement = () => {
    //     if(amount)
    //         setAmount(amount => amount - 1);
    // };

    const onSubmit = data => {
        clearErrors();
        console.log("onSubmit");
        //TODO
        // call rest api
        //callRegisterApi({data});
    };

    return (
        <Container className="justify-content-center pt-5" style={{height:"70vh"}}>
            <Row className="justify-content-md-center">
                <Card style={{ width: '60rem', height: '92vh' }} className="text-start">
                    <Card.Body >
                        <Container>
                            <Row >
                                <Col>
                                    Create Nft
                                </Col>
                            </Row>
                            <Form autoComplete="off"
                                noValidate
                                onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col lg={4}>
                                        <Card style={{ width: '15rem', height: '20rem'  }} className="text-center">
                                            <Card.Header style={{ width: '15rem', height: '15rem'  }}>
                                                <Card.Img variant="center" src={add_new_nft_card} style={{ width: '12rem', height: '15rem'  }} />
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>Upload New NFT</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={8}>
                                        <Row className="justify-content-center text-start">
                                            <Col>
                                                <Form.Group className="form-floating" controlId="formBasicEmail">
                                                    <Form.Control 
                                                        className="form-control-lg"
                                                        type="text" 
                                                        placeholder={t("common:collectionName")}
                                                        aria-invalid={errors.collectionname ? "true" : "false"} 
                                                        {...register('collectionname', { required: true })}/>
                                                    <Form.Label>{t("common:collectionName")}</Form.Label>   
                                                    {errors.collectionname && (
                                                        <Form.Text className="text-muted">
                                                            {t("form:isRequired")}
                                                        </Form.Text>
                                                    )}                                                 
                                                </Form.Group>
                                                <Form.Group className="form-floating" controlId="formBasicEmail">                                                    
                                                    <Form.Control 
                                                        className="form-control-lg"
                                                        type="text" 
                                                        placeholder={t("common:assetName")}
                                                        aria-invalid={errors.assetname ? "true" : "false"} 
                                                        {...register('assetname', { required: true })}/>
                                                    <Form.Label>{t("common:assetName")}</Form.Label>
                                                    {errors.assetname && (
                                                        <Form.Text className="text-muted">
                                                            {t("form:isRequired")}
                                                        </Form.Text>
                                                    )}  
                                                </Form.Group>
                                                <Row>
                                                    <Col>
                                                        <Form.Group className="form-floating" controlId="formBasicEmail">                                            
                                                            <Form.Control
                                                                className="form-control-lg"
                                                                type="text"
                                                                name="assetsymbol"
                                                                placeholder={t("common:assetSymbol")}
                                                                aria-invalid={errors.assetsymbol ? "true" : "false"}
                                                                {...register('assetsymbol', { required: true })}/>
                                                            <Form.Label>{t("common:assetSymbol")}</Form.Label>
                                                            {errors.assetsymbol && (
                                                                <Form.Text className="text-muted">
                                                                    {t("form:isRequired")}
                                                                </Form.Text>
                                                            )}
                                                        </Form.Group>                                                        
                                                    </Col>
                                                    <Col>
                                                        <Form.Group className="form-floating" controlId="formBasicEmail">
                                                            <Form.Select 
                                                                className="form-select-lg"
                                                                name="nfttype" 
                                                                aria-label="Floating label select example">
                                                                {nftType.map((val, index) => {
                                                                    return <option key={val.value}>{val.value}</option>
                                                                })}
                                                            </Form.Select>
                                                            <Form.Label>{t("common:nftType")}</Form.Label>
                                                            {errors.nfttype && (
                                                                <Form.Text className="text-muted">
                                                                    {t("form:isRequired")}
                                                                </Form.Text>
                                                            )}
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Form.Group className="form-floating" controlId="formBasicEmail">                                                    
                                                    <Form.Control 
                                                        className="form-control-lg"
                                                        type="text" 
                                                        name="externallink"
                                                        placeholder={t("common:externalLink")}
                                                        aria-invalid={errors.externallink ? "true" : "false"} 
                                                        {...register('externallink', { required: true })}/>
                                                    <Form.Label>{t("common:externalLink")}</Form.Label>
                                                    {errors.externallink && (
                                                        <Form.Text className="text-muted">
                                                            {t("form:isRequired")}
                                                        </Form.Text>
                                                    )}  
                                                </Form.Group>   
                                                <Form.Group className="form-floating" controlId="formBasicEmail">  
                                                    <Row>
                                                        <Form.Label>{t("common:amount")}</Form.Label>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Button 
                                                                className="btn-lg btn-primary JSInputSpinnerMin"
                                                                // onClick={handleDecrement}
                                                            >-
                                                            </Button>
                                                        </Col>
                                                        <Col>
                                                            <Form.Control 
                                                                className="form-control-lg text-center"
                                                                type="number"
                                                                onChange={handleOnChange}
                                                                value={amount}
                                                                placeholder={t("common:amount")}
                                                                aria-invalid={errors.amount ? "true" : "false"} 
                                                                {...register('amount', { required: true })}/>                                                    
                                                            {errors.amount && (
                                                                <Form.Text className="text-muted">
                                                                    {t("form:isRequired")}
                                                                </Form.Text>
                                                            )}
                                                        </Col>
                                                        <Col>
                                                            <Button 
                                                                className="btn-lg btn-primary JSInputSpinnerMax"
                                                                // onClick={handleIncrement}
                                                            >+
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Form.Group>                                             
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="form-floating" controlId="formBasicEmail">
                                            <Form.Control
                                                className="form-control-lg"
                                                type="textarea"
                                                placeholder={t("common:description")}
                                                style={{ height: '100px' }}
                                            />
                                            <Form.Label>{t("common:description")}</Form.Label>                                            
                                        </Form.Group>
                                    </Col>
                                </Row>
                                    <Form.Label>Lorem Ipsum</Form.Label>
                                    <Form.Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Form.Label>
                                    
                                <Row>
                                </Row>
                                <Row>
                                </Row>
                                <Row>
                                </Row>
                                <Row>
                                </Row>
                                <Row>
                                </Row>
                                <Row>
                                </Row>

                                <Row>
                                    <Col>
                                        <Button variant="secondary" type="submit" size="lg">
                                            Create NFT
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default NftCreate