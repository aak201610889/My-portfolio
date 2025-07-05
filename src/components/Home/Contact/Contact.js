import './Contact.scss';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-reveal';
import Helmet from 'react-helmet';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Common toast configuration
const toastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
function Contact() {
  const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_DATAA;
  const CHAT_ID = process.env.REACT_APP_CHAT_ID;
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    const textMessage = `
      📬 New Contact Form Submission:
      👤 Name: ${name}
      📧 Email: ${email}
      💬 Message: ${message}
    `;

    try {
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: textMessage,
      });
 
        toast.success("Message sent successfully!", toastConfig);
      form.current.reset();
    } catch (error) {
      console.error("Error sending message:", error);
       toast.error("Failed to send message.", toastConfig);
 
    }
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
              <p>Ayham Kattan</p>
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
            <input type="text" required placeholder="Name" name="name" />
          </div>
          <div>
            <input type="email" required placeholder="Email" name="email" />
          </div>
          <div>
            <textarea name="message" placeholder="Message" required />
          </div>
          <div className="send_button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
