import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Employee = () => {
    const [employees,setEmployees]=useState([]);
    useEffect(()=>{
       fetch('./employee.json')
       .then(res=>res.json())
       .then(data =>setEmployees(data.employee))
    },[]);
    return (   
      <Container>
            <Table responsive="xl">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Age</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
          {
                employees.map(employee =>(
                    <tr>
                    <td>{employee?.id} </td>
                    <td>{employee?.name} </td>
                    <td>{employee?.designation} </td>
                    <td>{employee?.age} </td>
                    <td>
                        <NavLink
                        to={`/employee/${employee?.id}`}
                        activeStyle={{
                        fontWeight: "bold",
                          color: "red"
                        }}>
                            Details
                        </NavLink>
                   </td>
                   
                  </tr>
                )
                   
                )
            }
          </tbody>
          
        </Table>
      </Container>
    
    );
};

export default Employee;