import React, { useState, useEffect } from 'react';

function Employees() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/getAll")
      .then(response => response.json())
      .then(data => setEmployeeData(data))  // Remove the array wrapping here
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className='employeeList mt-5'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Job Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Email</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(employee => (
            <tr key={employee.documentId}>
              <th scope='row'>{employee.documentId}</th>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.description}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
