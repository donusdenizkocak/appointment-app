import { Col, Container, Row } from "react-bootstrap"
import AddModal from "./AddModal";
import { useState } from "react";


export const Doctors = ({doctors,appointments,setAppointments}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const [selectedDr, setSelectedDr] = useState("")

   const handleClick =(drName)=>{
     setSelectedDr(drName)
     handleShow()
   }
  return (
    <Container className="p-2">
        <h3 className="display-6 mb-3" style={{color:"rgb(166,18,189)"}}>
            Our Doctors
        </h3>
        <Row className="justify-content-center">
            {doctors.map(({dr,index})=>(
              <Col xs={6} sm={4} md={3} key={index}>
              <img src={dr.img} alt={dr.name} 
              className="img-thumbnail doctor-img" 
              onClick={()=>handleClick(dr.name)}
              />
              <h5>{dr.name}</h5>
              <h6>{dr.dep}</h6>
            </Col>
            ))}
        
        </Row>
                    {/* add modal */}
         <AddModal
         show={show}
         handleClose={handleClose}
         handleShow={handleShow}
         appointments={appointments}
         setAppointments={setAppointments}
         selectedDr={selectedDr}
         />

    </Container>
  )
}
export default Doctors