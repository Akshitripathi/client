import React, { useState } from 'react'
import './components.css';
const RegisterPage = () => {
const [FormData,setFormData ]=useState(" ");

    const handleChange=()=>{

    }
    const handleSubmit=()=>{

    }


  return (
    <>
    <div>
      <h4>Register</h4>
    </div>
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email</label><br/><br/>
            <input type='text' placeholder='Enter your email' id='email' onChange={handleChange} value={FormData.email} required/>
            <br/><br/>
            
            <label>Password</label><br/><br/>
            <input type='password' placeholder='Enter your password' id='password' onChange={handleChange} value={FormData.email} required/>
            <br/><br/>
            
            <label>FullName</label><br/><br/>
            <input type='text' placeholder='Enter your name' id='fullName' onChange={handleChange} value={FormData.fullName} required/>
            <br/>
            <br/>
        </form>
    </div>
    </>
  )
}

export default RegisterPage
