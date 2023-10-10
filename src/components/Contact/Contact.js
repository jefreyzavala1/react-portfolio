import React, { useState } from "react";
import { contact } from "..//../portfolio";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xbjvoybq");
  if (state.succeeded) {
    return <p>Thank you for your message</p>;
  }

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title2">Contact</h2>
      <div className="contact__content">
        <form className="contact__form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
