import React, { useContext } from 'react';
import './Service.css';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../../images/banner/bucketgirl-removebg-preview.png';
import { AuthContext } from '../../Shred/ContextApi/ContextApi';

const Services = () => {
    const{user} = useContext(AuthContext)
    const handlerSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const hname = form.hname.value;
        const hNumber = form.hNumber.value;
        const number = form.number.value;
        const period = form.period.value;
       
        const sending = {
            name,hname,hNumber,number,period,
            email : user?.email,
        }
        fetch(`https://assignment-12-server.vercel.app/jwt?email=${user?.email}`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(sending)
        }).then(res => res.json())
        .then(data => {
            form.reset()
            console.log(data)
        })

    }
    return (
        <div>
            <div className='Banner-contaier'>
                <Container className='py-5'>
                    <div className='py-4'>
                        <Row>
                            <Col md="6">
                                <div className='banner-heading'>
                                    <h1>Professional Cleanning <br></br> Service</h1>
                                    <p>For clean your home garbage you can call us.We are working for keepping us town clean.Please give your address and submit bellow </p>
                                    <button className='banner-btnn'>Submit bellow</button>
                                </div>
                            </Col>
                            <Col md="6">
                                <img src={banner} className="w-100" height="500px"></img>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div>
                <Row>
                    <Col md="2"></Col>
                    <Col md="8" className='formm-container'>
                        <h3 className='mb-4 text-warning'>Sent Request</h3>
                        <form onSubmit={handlerSubmit}>


                            <Row>
                                <Col md="4" className="mb-3">
                                    <input className="service-input" type="text" placeholder='Enter name' required name="name"></input>
                                </Col>
                                <Col md="4" className="mb-3">
                                    <input className="service-input" type="text" placeholder=' House name' required name="hname"></input>
                                </Col>
                                <Col md="4" className="mb-3">
                                    <input className="service-input" type="number" placeholder='HouseNumber' required name="hNumber"></input>
                                </Col>
                                <Col md="4" className="mb-3">
                                    <input className="service-input" type="number" placeholder='Enter Phone number' required name="number"></input>
                                </Col>
                                <Col md="4" className="mb-3">
                                    <select className="service-input" name="period" id="cars">
                                        <option value="Morning">Morning</option>
                                        <option value="Noon">Noon</option>
                                        <option value="Afternoon">Afternoon</option>

                                    </select>
                                </Col>
                                <Col md="4" className="mb-3">
                                    <input className="service-input" type="text" placeholder='Enter email' required value={user?.email}></input>
                                </Col>
                            </Row>


                            <button className='banner-btn' type='submit'>button</button>
                        </form>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default Services;