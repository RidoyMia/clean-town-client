import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { AuthContext } from '../../Shred/ContextApi/ContextApi';

const Mypage = () => {
    const{user} = useContext(AuthContext);
    const [requested,setRequested] = useState([]);
    useEffect(()=>{
        fetch(`https://assignment-12-server.vercel.app/reqested/${user?.email}`)
        .then(res => res.json())
        .then(data => setRequested(data))
    },[user])
    return (
        <Container className='py-5 my-5'>
           <div className='py-5'>
           <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Your Name</th>
          <th>House name</th>
          <th>House number</th>
          <th>period </th>
          <th>Number</th>
          

        </tr>
      </thead>
      <tbody>
        {
            requested?.map(u => <tr>
                
                <td>{u?.name}</td>
                <td>{u?.hname}</td>
                <td>{u?.hNumber}</td>
                <td>{u?.period}</td>
                <td>{u?.number}</td>

              </tr>)
        }
        
      </tbody>
    </Table>
           </div>
        </Container>
    );
};

export default Mypage;