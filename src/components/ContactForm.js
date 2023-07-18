import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"
export const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kuw8ptm', 'template_7apdeva', form.current, 'ua-mLzbBMzfkNKjMO')
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Message sent successfully!');
          setMessageColor('green');
          form.current.reset(); // Reset the form fields
          setTimeout(() => {
            setMessage('');
            setMessageColor('');
          }, 2000); // Clear the message after 2 seconds
        },
        (error) => {
          console.log(error.text);
          setMessage('Error sending message. Please try again.');
          setMessageColor('red');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      {message && <p style={{ color: messageColor }}>{message}</p>}
    </form>
  );
};