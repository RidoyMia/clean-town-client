import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../../images/banner/heroo-1.jpg'
import banner2 from '../../../images/banner/green-town-wallpaperrr.jpg'
import banner3 from '../../../images/banner/maxresdefaultt.jpg';
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const[disease,setDisease] = useState([]);
  const navigate = useNavigate()
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setDisease(data)
    })
  },[]);
  const readmore = id =>{
 navigate(`/causes/${id}`)
  }
    return (
        <Container>
           <div>
           <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='bottom-container'>
          <h3>First Benifit for clean</h3>
          <p>Cleanliness gives a fresh and good look to our surroundings</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className='bottom-container'>
          <h3>Second Benifit for clean</h3>
          <p>Maintaining a clean environment reduces pollution, preserves our biosphere, protects endangered species, and also helps preserve the earth's natural resources</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='bottom-container'>
          <h3>Third Benifit For clean </h3>
          <p>Free from air pollution.
Water becomes cleaner and safer to drink.
More calm in running daily activities.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
           </div>
           <div>
            <Row>
                <h2 className='text-center my-5 pb-5'> For Garbage</h2>
               {
                disease?.map(u => <Col key={u?._id} md="4" className='mb-5'>
                  <Card className='shadoww' style={{ width: '24rem' }} data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
      <Card.Img variant="top" height="300px" src={u?.picture} />
      <Card.Body>
        <Card.Title>{u?.name}</Card.Title>
        <Card.Text>
          {u?.description.slice(0,100)}
...        </Card.Text>
        <Button variant="primary" onClick={()=> readmore(`${u?._id}`)}>Read more</Button>
      </Card.Body>
    </Card>
                </Col>)
               }
            </Row>
           </div>
        </Container>
    );
};

export default Home;