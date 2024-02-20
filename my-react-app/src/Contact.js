import React, { useState } from 'react';
import './App.css'; // Ensure this path matches your file structure

function Contact() {
  const [review, setReview] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(review);
    setReview({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  return (
    <div className="gradient-background">
      <div className="container">
        <div className="card info-card">
          <h2>Contact Information</h2>
          <p>Phone Number: +123 456 7890</p>
          <h2>Support Center</h2>
          <p>Address: 1234 Street Name, City, Country</p>
          <div className="map-container">
            <iframe
              title="Our Location"
    
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.1666146608172!2d81.51990931478478!3d16.56811898857441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4eb220051d%3A0xea3d7b50d0a1458!2sShri%20Vishnu%20Engineering%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1669296313757!5m2!1sen!2sin"
                        width="450px" height="300px" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="card review-card">
          <h2>Leave a Review</h2>
          <form onSubmit={handleSubmit} className="review-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={review.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={review.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={review.phoneNumber} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={review.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;