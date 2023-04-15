import { useState } from "react"
import {doctorData, appointmentData} from "../helpers/data"
import Doctors from "../components/Doctors"
import AppointmentList from "../components/AppointmentList"


export const Home = () => {
    const [doctors, setDoctors] = useState(doctorData)
    const [appointments, setAppointments] = useState(appointmentData)
  return (
   
    <main className="text-center mt-2">
         <div className="display-5 text-danger">
            <Doctors 
            doctors={doctors}
            appointments={appointments}
              setAppointments={setAppointments}
           />
          </div>
          <AppointmentList
          appointments={appointments}
          setAppointments={setAppointments}
          />
      </main>
  )
}
export default Home