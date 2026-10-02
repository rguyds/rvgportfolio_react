import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSVG";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();
  const nameInputRef = useRef(null);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <h1 variants={listVariant} className="cTitle">
            Let's keep in touch
          </h1>
          <div variants={listVariant} className="formItem" onClick={() => nameInputRef.current?.focus()}>
            <label>Name</label>
          <input
            ref={nameInputRef}
            type="text"
            name="user_username"
            placeholder="Type your name here..."
            required
            
          /> 
         </div>
          <div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Type your email here..."
              required
            />
          </div>
          <div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <button variants={listVariant} className="formButton">
            Send
          </button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </form>
      </div>
      <div className="cSection"><ContactSvg/></div>
    </div>
  );
};

export default Contact;