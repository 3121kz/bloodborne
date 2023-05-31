import React from "react";
import Doll from "../images/doll.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="left" style={{ backgroundImage: `url(${Doll})` }}></div>
      <div className="right ">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name"> Full Name</label>
          <input
            name="name"
            placeholder="Enter your name..."
            type="text"
          ></input>
          <label htmlFor="email"> Your email</label>
          <input name="email" placeholder="Enter email..." type="email"></input>
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
