import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors(prev => ({
        ...prev,
        [name]: 'This field is required'
      }));
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors(prev => ({
        ...prev,
        email: 'Please enter a valid email address'
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (value) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your message"
            />
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;