import React from 'react';

import './ContactForm.css'

interface Props {
  
}

const ContactForm = (props: Props) => {  
  return (
    <div className="contact-form">
        <h1 className="contact-title">Get in touch with me at:</h1>
        <a className="email-link" href="mailto:tåst@example.com">dantrick@example.com</a>
    </div>
  )};

export default ContactForm;