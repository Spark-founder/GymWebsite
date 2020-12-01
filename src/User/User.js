import React from "react";

import "./User.css";
import Navbar from "../Navbar/Navbar";

function User() {
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
      <div>
        <br />
        <h1 className='text-capitalize text-center text-info Time'>30 Days Left</h1>
        <h3 className='text-center text-muted'>JOINED ON</h3>
        <div className='Time_left text-capitalize text-center'>{today}</div>
      </div>
    </div>
  );
}

export default User;
