import React from "react";
import { validateEmail } from "../../utils/helpers";
import { useState } from "react";

export function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, SetErrorMessage] = useState("");

  // handles data capturing from input fields
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  //form submit. validated all forms contain user data
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      SetErrorMessage("One of the fields are invalid");
      return;
    }
    //if recieved, tells user messages have been recieved and sets forms to blank
    SetErrorMessage("Message recieved");
    setEmail("");
    setName("");
    setMessage("");
  };

  //handles blur event if user does not input data into a field
  const handleBlur = (e) => {
    const { target } = e;
    const inputValue = target.value;
    const inputName = target.name;
    if (inputValue === "") {
      SetErrorMessage(`${inputName} is a required field`);
    } else {
      SetErrorMessage("");
    }
  };

  return (
    <div>
      <h1>Get in touch</h1>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onBlur={handleBlur}
            value={name}
            name="name"
            onChange={handleInputChange}
            placeholder="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={email}
            onBlur={handleBlur}
            name="email"
            onChange={handleInputChange}
            placeholder="email"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            value={message}
            onBlur={handleBlur}
            name="message"
            onChange={handleInputChange}
            placeholder="message"
            type="text"
            className="form-control"
          />
        </div>
        <button
          disabled={errorMessage}
          type="submit"
          onClick={handleFormSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
