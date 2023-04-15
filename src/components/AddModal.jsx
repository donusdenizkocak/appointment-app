import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddModal=({show,appointments,setAppointments,handleClose,handleShow,selectedDr})=> {
  const [patientName, setPatientName] = useState("")
  const [date, setDate] = useState("")
  //PATİENT ADD

  const handleSubmit =(e)=>{
    e.preventDefault()
    setAppointments([
    ...appointments,
    {
      id:appointments.length +1,
      patient:patientName,
      day:date,
      consulted:false,
      doctor:selectedDr
    }
    ])
    //console.log("object")
    handleClose()
  }
  //console.log(patientName,date)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Appointment for  {selectedDr}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                autoFocus
                onChange={(e)=>setPatientName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="datetime"
            >
              <Form.Label>Date/Time</Form.Label>
              <Form.Control 
              type="datetime-local"
              onChange={(e)=>setDate(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="success" >
            Save Changes
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

//render(<Example />);
export default AddModal