import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import app from '../../../images/banner/playy/appstoree.jpg'
import play from '../../../images/banner/playy/playstoree.jpg'

const Footer = () => {
    return (
        <div className='bg-dark text-light'>
            <Container className='py-5 px-5'>
                <Row>
                    <Col md="3">
                        <h2>Pages</h2>
                        
                            <p>Awarness</p>
                            <p>Send-request</p>
                            <p>Primary-treatment</p>
                            <p>About us</p>
                        
                    </Col>
                    <Col md="3">
                        <h2>Contact us</h2>
                        <p>Phone : +8801314791929</p>
                        <p>Phone : +8801388559287</p>
                        <p>Email : Ridoymia153159web@gmail.com</p>
                        <p>Email : mdSabbir477470@gmail.com</p>
                    </Col>
                    <Col md="6" className='py-5'>
                          
                               
                                <Row>
                                    <Col md="12">
                                    <img src={app} height="50px" ></img>
                                    </Col>
                                    <Col md="12">
                                    <img src={play} height="50px" ></img>
                                    </Col>
                                </Row>
                            
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;