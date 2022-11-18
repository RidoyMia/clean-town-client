import React, { useContext, useState } from 'react';
import {  Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import gimg from '../../../images/Google.png';
import { AuthContext } from '../../Shred/ContextApi/ContextApi';

const Register = () => {
   const navigate = useNavigate()
    const {user,createUser,Gsignin} = useContext(AuthContext);
    const [loading,setLoading] = useState('')
    const submithandler = e =>{
        e.preventDefault()
         const form = e.target;
         const name = form.name.value;
         const email = form.email.value;
         const pass = form.pass.value;
         const con = form.con.value;
         console.log(name,email,pass,con)
         if(pass !== con){
            setLoading("password dont match")
         }
         else{
            createUser(email,pass)
            .then(res => {
               console.log(res)
               form.reset()
            }).catch(e => console.log(e))
         }
         

    }
    const googleSignin = ()=>{
      Gsignin()
      .then(res => {
         console.log(res)
         .catch(e => console.log(e))
      })
    }
    if(user){
      const email = user?.email;
      const role = 'user';
      const jwtsend = {
         email : email,
         role,
      }
      fetch(`http://localhost:8000/jwt`,{
         method : 'POST',
         headers : {
            'Content-Type' : 'application/json'
         },
         body : JSON.stringify(jwtsend)
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    return (
        <Container className='py-5'>
             <Row className="justify-content-md-center row my-md-5">
                <Col md="5">
                  <div className='register-container'>
                  <h2 className='text-center login-signup'>Sign up</h2>
               <div className='form-container'>
               <Form onSubmit={submithandler}>
                  
                   
                  <input  name="name" className='w-100 mb-4 input' type="text" placeholder='Full name' required></input>
                  <input  name="email" className='w-100 mb-4 input' type="email" placeholder='Enter-your email' required></input>
                  <input  name="pass" className='w-100 mb-4 input' type="number" placeholder='Enter-password' required></input>
                  <input  name="con" className='w-100 mb-4 input' type="number" placeholder='Enter-password-again' required></input>
                  <div className='mb-3'>
                  <Link className='link mb-3' to="/login">Are you new? <span className='text-primary'>please Login</span></Link>
                  </div>
                  <button type='submit' className='w-100 submit-btn'>submit</button>
                  <div className='d-flex justify-content-center parent-divide'>
                     <div className='divide'></div>
                     <p className='or'>Or</p>
                     <div className='divide'></div>
                  </div>

                  <button onClick={googleSignin} className='google-btn'><img height="40px" src={gimg}></img> Google</button>
    </Form>
               </div>
                  </div>
                </Col>
             </Row>
        </Container>
    );
};

export default Register;