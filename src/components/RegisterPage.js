

import React, { useState } from 'react';
import axios from 'axios';
import './components.css';

const RegisterPage = () => {
  const [FormData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    customer_id: '',
    mobile_number: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(() => ({
      ...FormData,
      [name]: value
    }));
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    console.log(FormData);
    try{
      const response= await axios.post("http://localhost:3001/register",FormData);
      alert('response',response);
      alert("User added successfully");
    }catch(err){
      alert("Error",err);
    }

  };

  return (
    <>
      <div>
        <h4>Register</h4>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Email</label><br/><br/>
          <input
            type='text'
            placeholder='Enter your email'
            id='email'
            name='email'
            onChange={handleChange}
            value={FormData.email}
            required
          />
          <br/><br/>
          
          <label>Password</label><br/><br/>
          <input
            type='password'
            placeholder='Enter your password'
            id='password'
            name='password'
            onChange={handleChange}
            value={FormData.password}
            required
          />
          <br/><br/>
          
          <label>First Name</label><br/><br/>
          <input
            type='text'
            placeholder='First Name'
            id='first_name'
            name='first_name'
            onChange={handleChange}
            value={FormData.first_name}
            required
          />
          <br/><br/>

          <label>Last Name</label><br/><br/>
          <input
            type='text'
            placeholder='Last Name'
            id='last_name'
            name='last_name'
            onChange={handleChange}
            value={FormData.last_name}
            required
          />
          <br/><br/>

          <label>Customer ID</label><br/><br/>
          <input
            type='number'
            placeholder='Customer ID'
            id='customer_id'
            name='customer_id'
            onChange={handleChange}
            value={FormData.customer_id}
            required
          />
          <br/><br/>

          <label>Mobile Number</label><br/><br/>
          <input
            type='number'
            placeholder='Mobile Number'
            id='mobile_number'
            name='mobile_number'
            onChange={handleChange}
            value={FormData.mobile_number}
            required
          />
          <br/><br/>

          <button type='submit'>Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;