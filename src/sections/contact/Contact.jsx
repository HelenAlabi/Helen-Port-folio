import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id= "contact">
      <h2>Get in Touch</h2>
      <p>Send an Email</p>
      <div className='container contactContainer'>
        <form id="container" onSubmit={handleSubmit}>
          <div className="inputEU">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
