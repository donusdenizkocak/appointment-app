import { Col, Container, Row } from "react-bootstrap"
import {FaTimesCircle} from "react-icons/fa"

 const AppointmentList = ({appointments,setAppointments}) => {

  const handleDelete = (id) =>{
    setAppointments(appointments.filter((item)=> item.id !== id ))
  }

const handleDoubleClick =(id)=>{
  setAppointments(
    appointments.map((item)=>
    item.id ==id ? {...item, consulted: !item.consulted} :item
    )
  )
}

  return (
    <Container className="p-2">
    <h3 className="display-6 text-danger" >
        Appointment List
    </h3>
    {appointments.map((item)=>{
        const {id,patient,consulted,doctor,day}=item;
        return(
            <div 
            className={consulted ? "appointments consulted" : "appointments"}
            key={id}
            onDoubleClick={()=>handleDoubleClick(id)}
            >
            <Row className="justify-content-center g-3 align-item-center">
              <Col xs={12} sm={12} md={6}>
              <h4 className="text-danger">
                {patient}
              </h4>
              <h5>
                {doctor}
              </h5>
              </Col>
              <Col xs={12} sm={12} md={6}>
              <h5 className="text-danger">
               Date : {new Date(day).toLocaleDateString()}
              </h5>
              <h6>
               Time :{new Date(day).toLocaleDateString()}
              </h6>
              </Col>
              <Col xs={2} sm={4} md={1} className="text-end">
                <FaTimesCircle
                className="text-danger fs-3"
                type="button"
                onClick={()=>handleDelete(id)}
                />
              </Col>
            </Row>
        </div>
        )
    })}
   
    </Container>
  )
}
export default AppointmentList