import React ,{useState}from "react";
import Calendar from 'react-calendar';
import "./User.css";
import Navbar from "../Navbar/Navbar";
import 'react-calendar/dist/Calendar.css';

function User() {
    const [value, onChange] = useState(new Date());
    var today = new Date().toLocaleDateString(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

  return (
    <div>
      <Navbar />
      <div class="alert alert-info" role="alert">
            Today is Holiday
       </div>
      <div>
        <br />
        <h1 className='text-capitalize text-center text-info Time'>30 Days Left</h1>
        <h3 className='text-center text-muted'>JOINED ON</h3>
        <div className='Time_left text-capitalize text-center'>{today}</div>
        <div>
            <Calendar onChange={onChange} value={value} className='Calender'/>
        </div>
      </div>
    </div>
  );
}

export default User;
