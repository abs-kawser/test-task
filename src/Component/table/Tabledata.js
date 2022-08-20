import React from 'react';
import { Table } from 'react-bootstrap';

const Tabledata = ({data}) => {
        
     

    return (
        <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Email</th>
          <th>mobile</th>
          <th>Date Of Birth</th>
          <th>Sex</th>
          <th>Govt Issued Id</th>
          <th>Guardian Details</th>
          <th>Emergency no</th>
          <th>Address</th>
          <th>state</th>
          <th>city</th>
          <th>country</th>
          <th>pincode</th>
          <th>occupation</th>
          <th>maritalStatus</th>
          <th>bloodgroup</th>
          <th>nationality</th>
        </tr>
      </thead>
      <tbody>
        
        
          <tr>
            <td>1</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.mobile}</td>
            <td>{data.dateOfBirth}</td>


            <td>{data.Sex}</td>
            <td>{data.GovtIssuedId}</td>
            <td>{data.guardianDetails}</td>

            <td>{data.emgCnumber}</td>
            <td>{data.address}</td>


            <td>{data.state}</td>
            <td>{data.city}</td>
            <td>{data.country}</td>
            <td>{data.pincode}</td>
            <td>{data.occupation}</td>
            <td>{data.maritalStatus}</td>
            <td>{data.bloodgroup}</td>
            <td>{data.nationality}</td>


          </tr>
            
           

          
    
      </tbody>

    </Table>

        </div>
    );
};

export default Tabledata;