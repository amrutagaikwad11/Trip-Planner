import React, { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import "../style/contact.css"; // Make sure this path is correct

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions or suggestions? We'd love to hear from you!</p>
      </div>

      <div className="contact-container">
        <div className="contact-form-section">
          {submitted && (
            <div className="success-message">
              <p>Thank you for your message! We'll get back to you soon.</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </label>
            <label>
              Subject
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="suggestion">Suggestion</option>
                <option value="feedback">Feedback</option>
                <option value="bug">Report an Issue</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </label>
            <button type="submit" className="submit-btn">
              <Send className="icon" /> Send Message
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <div className="info-card">
            <div className="icon-bg mail-bg">
              <Mail className="icon" />
            </div>
            <h3>Email Us</h3>
            <p>For general inquiries and support</p>
            <a href="mailto:support@tripplanner.com">support@tripplanner.com</a>
          </div>

          <div className="info-card">
            <div className="icon-bg feedback-bg">
              <MessageSquare className="icon" />
            </div>
            <h3>Feedback</h3>
            <p>We value your feedback and suggestions</p>
            <a href="mailto:feedback@tripplanner.com">feedback@tripplanner.com</a>
          </div>

          <div className="tips-card">
            <h3>Quick Tips</h3>
            <ul>
              <li>Be specific about the type of questions you'd like to see</li>
              <li>Share your travel experiences to help us improve</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
