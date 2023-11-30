import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function EmployerModal() {
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false)
    const [validationErrors, setValidationErrors] = useState({});


    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        description: ''
    });

    // Handling input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const submitEmployeeData = () => {
        const errors = {};
        if (!employee.firstName) errors.firstName = 'First Name is required';
        if (!employee.lastName) errors.lastName = 'Last Name is required';
        if (!employee.email) errors.email = 'Email is required';
        if (!employee.jobTitle) errors.jobTitle = 'Job Title is required';
        if (!employee.description) errors.description = 'Description is required';

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setValidationErrors({});

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

        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false)
            handleClose();
        }, 3000);

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
                Add Employee
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
                            {validationErrors.firstName && <div className='invalid-feedback'>{validationErrors.firstName}</div>}
                        </div>
                        <div className='mb-3'>
                            <label>Last Name:</label>
                            <input type='text' name='lastName' className='form-control' value={employee.lastName} onChange={handleInputChange} />
                            {validationErrors.firstName && <div className='invalid-feedback'>{validationErrors.lastName}</div>}
                            
                        </div>
                        <div className='mb-3'>
                            <label>Email:</label>
                            <input type='email' name='email' className='form-control' value={employee.email} onChange={handleInputChange} />
                            {validationErrors.firstName && <div className='invalid-feedback'>{validationErrors.email}</div>}
                        </div>
                        <div className='mb-3'>
                            <label>Job Title:</label>
                            <input type='text' name='jobTitle' className='form-control' value={employee.jobTitle} onChange={handleInputChange} />
                            {validationErrors.firstName && <div className='invalid-feedback'>{validationErrors.jobTitle}</div>}
                        </div>
                        <div className='mb-3'>
                            <label>Description</label>
                            <textarea type='text' name='description' className='form-control' value={employee.description} onChange={handleInputChange} />
                            {validationErrors.firstName && <div className='invalid-feedback'>{validationErrors.description}</div>}
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