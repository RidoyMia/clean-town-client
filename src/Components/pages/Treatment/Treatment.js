import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Treatment = () => {
    const[treatment,setTreatment] = useState([]);
    useEffect(()=>{
        fetch(`https://assignment-12-server.vercel.app/Services`)
        .then(res => res.json())
        .then(data => setTreatment(data))
    },[])
    return (
        <Container className='py-5 my-5'>
           
               {
                 treatment?.map(u =><Row className='mb-5'>
                    <Col md="4">
                        <img className='w-100' src={u?.picture}></img>
                    </Col>
                    <Col md="8">
                       <div className='px-5'>
                        <h4>{u?.name}</h4>
                        <p>{u?.description}</p>
                        <button className='banner-btn'><a href='https://meet.google.com/ejm-ypoe-hpm' className='antor'>see doctors now</a></button>
                       </div>
                    </Col>
                 </Row>)
               }
         
        </Container>
    );
};

export default Treatment;