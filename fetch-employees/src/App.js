

// src/components/DisplayEmployee.jsx
import React from 'react';
import DisplayEmployee from './components/DisplayEmployee';
import axios from 'axios';
import useState from 'react'

function DisplayEmployee() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    // Send the request
  axios
      .get('https://randomuser.me/api?nat=en')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };

  return (
    <div className='App'>
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}


export default DisplayEmployee;