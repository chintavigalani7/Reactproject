import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const showMessage = () => {
    setNameError("");
    setEmailError("");
    setMessageError("");

    if (name === "") {
      setNameError("Please enter your name.");
      return;
    }

    if (email === "") {
      setEmailError("Please enter your email address.");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      setEmailError("Please enter a valid Gmail address.");
      return;
    }

    if (message === "") {
      setMessageError("Please enter your message.");
      return;
    }

    alert("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div className="container">
        <h1 className="contact">Get in touch</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <div className="error-message">{nameError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageError && (
              <div className="error-message">{messageError}</div>
            )}
          </div>
          <button type="button" className="btnC" onClick={showMessage}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
