import React, { useEffect, useRef } from "react";

const Contact = () => {

  const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
},[])

  return (
    <div className="contact">
      <div className="contact-container">
        <form name= "contact" action="https://formspree.io/f/xnqoknyl" method="POST"  netlify >
          <h2 style={{ textAlign: "left" }}>Get in Touch</h2>

          <input ref={inputRef} name="name" placeholder="Enter your name..." type="text" />
          <br />

          <input name="email" placeholder="Enter your email..." type="email" />
          <br />
          <textarea name="Message" placeholder="Enter your message" />
          <br />
          <div data-netlify-recaptcha="true"></div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
