import './Contact.scss'
import React, { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-reveal';
import Helmet from 'react-helmet';
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "portfolio",
          "template_eemdixa",
          form.current,
          "swYjTI4sgYvsQGqYg"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <div className="contact">
      <Helmet>
        <title>Contact page</title>
        <meta
          name="description"
          content="Contact page for my portfolio application"
        />
      </Helmet>
      <h1>Contact me</h1>
      <div className="contact_container">
        <Fade left cascade>
          <div className="contact_text">
            <h2>Get In Touch</h2>
            <div>
              <FontAwesomeIcon icon={faUser} color="#cfb21b" />
              <p>Ayham kattan</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} color="#cfb21b" />
              <p>ayhamkattan1@gmail.com</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} color="#cfb21b" />
              <p>+963 938 889 107</p>
            </div>
          </div>
        </Fade>
   
          <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <h1>Message me</h1>
            <div>
              {" "}
              <input type="text" required placeholder="Name" name="name" />
            </div>
            <div>
              {" "}
              <input type="email" required placeholder="Email" name="email" />
            </div>
            <div>
              {" "}
              <textarea name="message" placeholder="Message" />
            </div>
            <div className="send_button">
              <button type="submit">Send</button>
            </div>
          </form>
       
      </div>
    </div>
  );
}

export default Contact