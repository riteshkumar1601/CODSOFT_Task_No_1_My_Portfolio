import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./image/email-icon.png"
            text="riteshkumarr1601@gmail.com"
          ></ContactInfoCard>
          <ContactInfoCard
            iconUrl="./image/github-icon.png"
            text="https://github.com/riteshkumar1601"
          ></ContactInfoCard>
        </div>

        <div style={{ flex: 1 }}>
          <ContactForm></ContactForm>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
