import React, { useState } from "react";
import { validateEmail, validateMessage } from "../utils/form-helper";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
      if (inputValue.length < 3) {
        setErrorMessage("Field required");
      } else {
        setErrorMessage("");
      }
    } else if (inputType === "email") {
      setEmail(inputValue);
      if (!inputValue.includes("@")) {
        setErrorMessage("Field required");
      } else {
        setErrorMessage("");
      }
    } else if (inputType === "message") {
      setMessage(inputValue);
      if (inputValue.length < 5) {
        setErrorMessage("Field required");
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleFormSubmit = (e) => {
    // Prevent Default
    e.preventDefault();

    // Check to see if email is valid or if name is empty. If so, display err message
    if (!validateEmail(email) || !email) {
      setErrorMessage("username or email is invalid");
      // Exit out of this code block if err so user can correct
      return;
    }

    if (!validateMessage(message) || !message) {
      setErrorMessage("Must provide message to send");
      // Exit out of this code block if err so user can correct
      return;
    }

    alert(`Thanks for your message ${name}!`);

    // Clear out the input after sending.
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact-form">
      <section className="contact">
        <div className="centerTitle">
          <h1>CONTACT</h1>
        </div>
        <form>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />

          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email Address"
          />

          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            id="message"
          />
          <button type="button" onClick={handleFormSubmit} className="send">
            SEND
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </section>
    </div>
  );
}
