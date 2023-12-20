import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Snackbar } from "@mui/material";
import "./index.css";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r5p5x9p",
        "template_p77uw44",
        form.current,
        "diBmXupssxTnkKAmJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="CoContainer" id="contact">
      <div className="Wrapper">
        <div className="Title">Contact</div>
        <div className="Desc">
          Certainly! If you have any questions or opportunities, feel free to
          share them.
        </div>
        <form ref={form} className="ContactForm" onSubmit={handleSubmit}>
          <div className="ContactTitle">Send me a message 👋</div>
          <input className="ContactInput" placeholder="Name" name="from_name" />
          <input
            className="ContactInput"
            placeholder="Email"
            name="from_email"
          />
          <input
            className="ContactInput"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="ContactInputMessage"
            placeholder="Message"
            rows="4"
            name="message"
          />
          <input className="ContactButton" type="submit" value="Send" />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent"
          severity="success"
        />
      </div>
    </div>
  );
};

export default Contact;
