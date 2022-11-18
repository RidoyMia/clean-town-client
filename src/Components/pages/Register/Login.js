import React, { useContext } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gimg from '../../../images/Google.png';
import { AuthContext } from '../../Shred/ContextApi/ContextApi';

const Login = () => {
   const{Login,Gsignin} = useContext(AuthContext)
    const submithandler = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        Login(email,pass)
        .then(res =>{
         console.log(res)
        }).catch(e => console.log(e));
        form.reset()

    }
    const googleSignin = ()=>{
      Gsignin()
      .then(res => {
         console.log(res)
         .catch(e => console.log(e))
      })
    }
    return (
         <Container className='py-5'>
        <Row className="justify-content-md-center row my-md-5">
           <Col md="5">
             <div className='register-container'>
             <h2 className='text-center login-signup'>Sign up</h2>
          <div className='form-container'>
          <Form onSubmit={submithandler}>
             
              
             
             <input name="email" className='w-100 mb-4 input' type="email" placeholder='Enter-your email'></input>
             <input name="pass" className='w-100 mb-4 input' type="number" placeholder='Enter-password'></input>
           
             <div className='mb-3'>
                  <Link className='link mb-3' to="/register">Are you new? <span className='text-primary'>please signUp</span></Link>
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

export default Login;