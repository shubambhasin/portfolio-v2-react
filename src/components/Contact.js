import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <form>
          <h2 style={{ textAlign: "left" }}>Get in Touch</h2>

          <input placeholder="Enter your name..." type="text" />
          <br />

          <input placeholder="Enter your email..." type="email" />
          <br />
          <textarea placeholder="Enter your message" />
          <br />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
