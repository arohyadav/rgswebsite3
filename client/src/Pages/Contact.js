import React, { useState } from 'react';
import axios from 'axios';
import "./ContactForm.css";


const Form = () => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',    
    workemail: '',
    phonenumber:'',
    jobtitle: '',
    company: '',
    messagebox: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      const res = await axios.post('http://localhost:5000/submit-form', formValues);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="contact_details">
        <img src="rgs-img/contact_info.jpg" alt=""></img>
    <form onSubmit={handleSubmit} className="contact-us-form">
      <label>
        First Name*
        <input type="text" name="firstname" value={formValues.firstname} onChange={handleChange} placeholder="Enter First Name" />
      </label><br></br>
      <label>
        Last Name*
        <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} placeholder="Enter Last Name" />
      </label>
      <label><br></br>
        Work email*
        <input type="email" name="workemail" value={formValues.workemail} placeholder="Enter workemail" onChange={handleChange} />
      </label><br></br>
      <label>
      Phone Number*
        <input type="text" name="phonenumber" placeholder="Enter Phoneno." value={formValues.phonenumber} onChange={handleChange} />
      </label><br></br>
      <label>
      Job title*
        <input type="text" name="jobtitle" placeholder="Enter jobtitle" value={formValues.jobtitle} onChange={handleChange} />
      </label><br></br>
      <label>
        Company*
        <input type="text" name="company" placeholder="Enter company name" value={formValues.company} onChange={handleChange} />
      </label><br></br>
      <label>
        Messagebox*
        <textarea name="messagebox" placeholder="Write message" value={formValues.messagebox} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Form;