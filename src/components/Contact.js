import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <form netlify data-netlify-recaptcha="true">
          <h2 style={{ textAlign: "left" }}>Get in Touch</h2>

          <input placeholder="Enter your name..." type="text" />
          <br />

          <input placeholder="Enter your email..." type="email" />
          <br />
          <textarea placeholder="Enter your message" />
          <br />
          <div data-netlify-recaptcha="true"></div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
