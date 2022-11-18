import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const[single,setSingle] = useState({});
    useEffect(()=>{
        fetch(`https://assignment-12-server.vercel.app/causes/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            setSingle(data[0])
        })
    },[id])
    return (
        <Container className='py-5 my-5'>
            <Row>
                <Col md="2"></Col>
                <Col md="8">
                    <img src={single?.picture} className="w-100"></img>
                </Col>
                 <Col md="12">
                    <h3 className='text-center py-3'>{single?.name}</h3>
                 </Col>
                 <Col md="12">
                    <p className='justify-content-center'>{single?.description}</p>
                 </Col>
                 <Col md="12">
                    <p className='justify-content-center'>{single?.remedy}</p>
                 </Col>

            </Row>
        </Container>
    );
};

export default Details;