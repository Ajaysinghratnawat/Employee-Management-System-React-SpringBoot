// import { Container } from 'postcss';
import React, { useEffect, useState } from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employees");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.log("Error not fetching data")
      }
    }
    fetchEmployees();
  },[]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`,{
        method: "DELETE",
      });
      if(response.ok){
        const updated = employees.filter((employee) => employee.id !== id);
        setEmployees(updated);
      }
      console.log("Deleted")
    } catch (error) {
      console.log("Error in delete")
    }
  }

  const handleUpdate = (id) => {
    navigate(`/employee/${id}`);
  }

  return (
    <>
      <Container clasName="mt-5 text-dark">
        <Row>
          <Col>
            <h1 className="text-center text-dark">Employees</h1>
            <table striped bordered hover responsive className="table text-dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>phone</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.department}</td>
                    <td>
                      <Button varient="outline-secondary" onClick={()=>handleUpdate(employee.id)}>Update</Button>
                      <Button varient="outline-danger" onClick={()=> handleDelete(employee.id)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard;
