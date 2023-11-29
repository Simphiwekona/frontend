import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function EmployerModal() {
    const [show, setShow] = useState(false);

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        description: ''
    });

    // Handling input change
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEmployee({...employee, [name]: value});
    };

    const submitEmployeeData = () => {
        if(!employee.firstName || !employee.lastName || !employee.email || !employee.description || !employee.jobTitle){
            console.error("Please fill in all requied fields");
            return;
        }
        fetch("http://localhost:8080/api/v1/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success: ', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        handleClose();

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitEmployeeData();
        // onmouseleave(employee);
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant='primary' onClick={handleShow}>
            Add User
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                <label className='form-label'>First Name:</label>
                <input type='text' name='firstName' className='form-control' value={employee.firstName} onChange={handleInputChange} />
                </div>
                <div className='mb-3'>
                <label>Last Name:</label>
                <input type='text' name='lastName' className='form-control' value={employee.lastName} onChange={handleInputChange} />
                </div>
                <div className='mb-3'>
                <label>Email:</label>
                <input type='email' name='email' className='form-control' value={employee.email} onChange={handleInputChange} />
                </div>
                <div className='mb-3'>
                <label>Job Title:</label>
                <input type='text' name='jobTitle' className='form-control' value={employee.jobTitle} onChange={handleInputChange} />
                </div>
                <div className='mb-3'>
                <label>Description</label>
                <textarea type='text' name='description' className='form-control' value={employee.description} onChange={handleInputChange} />
                </div>
                
            
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitEmployeeData}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default EmployerModal;