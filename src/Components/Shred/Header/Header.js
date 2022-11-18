import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../ContextApi/ContextApi';
import './Header.css';
import logo from '../../../images/banner/download-removebg-preview (2).png'


const activeStyle ={
  // backgroundColor : 'red',
  textDecuration : 'urderline',
  color : 'rgb(239, 28, 28)',
  fontWeight : 'bold',
  fontSize: '15px !important',
  
  borderRadius : '50px'
 
}
const Header = () => {
  const{user,logOut} = useContext(AuthContext)
    const signout = ()=>{
      logOut()
      .then(res =>console.log(res))
      .catch(e => console.log(e))
    }
    return (
        <Navbar fixed='top' className='navigation-container' expand="lg">
        <Container>
          <Navbar.Brand href="#"> <img height="50px" src={logo}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              
              navbarScroll
            >
              <NavLink
             className="link"
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Awareness
          </NavLink>
          <NavLink
             className="link"
            to="/service"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Send-Request
          </NavLink>
         {
          user?.email? <NavLink
          className="link"
         to="/my-requested"
         style={({ isActive }) =>
           isActive ? activeStyle : undefined
         }
       >
         My-Request
       </NavLink> : ''
         }
         {
          user?.email? <NavLink
          className="link"
         to="/treatment"
         style={({ isActive }) =>
           isActive ? activeStyle : undefined
         }
       >
         Treatment
       </NavLink> : ''
         }
         
          <NavLink
             className="link"
            to="/aboutus"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            About us
          </NavLink>
          
            </Nav>
            <Nav
              className="ms-auto my-2 my-lg-0 mx-5"
              
              navbarScroll
            >
              
          
          {
            user? <button onClick={signout} className='logout-btn'>LogOut</button> : <NavLink
            className="link"
           to="/login"
           style={({ isActive }) =>
             isActive ? activeStyle : undefined
           }
         >
           Login
         </NavLink>
          }
          {
            user?.email?   <button className='email-btn'>{user?.email}</button> :''
          }
          
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;