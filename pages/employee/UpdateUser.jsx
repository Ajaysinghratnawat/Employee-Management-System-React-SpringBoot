import React from 'react'
import './UpdateUser.css'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate , useParams } from "react-router-dom";


const UpdateUser = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employees/${id}`);
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.log("Error in fetch")
            }
        }
        fetchUserData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log("Updated user");
            navigate('/');
        } catch (error) {
            console.log("Error in submit", error);
        }
    }

  return (
     <>
    <div className="center-form">
        <h1 style={{ color: 'black' }}>Edit Employee</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Control 
                type='text' 
                name='name'
                placeholder='Enter name' 
                value={formData.name}
                onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicName">
                <Form.Control 
                type='email' 
                name='email'
                placeholder='Enter email' 
                value={formData.email}
                onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicName">
                <Form.Control 
                type='text' 
                name='phone'
                placeholder='Enter phone' 
                value={formData.phone}
                onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicName">
                <Form.Control 
                type='text' 
                name='department'
                placeholder='Enter department' 
                value={formData.department}
                onChange={handleInputChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className='w-100'>
                Edit Employee
            </Button>
        </Form>
    </div>
    </>
  )
}

export default UpdateUser;
