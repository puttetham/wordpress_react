import React from 'react';

import './ContactForm.css'

interface Props {
  
}

const ContactForm = (props: Props) => {  
  return (
    <div className="contact-form">
        <h2 className="contact-title">Get in touch with me at:</h2>
        <a className="email-link" href="mailto:dantrick@example.com">dantrick@example.com</a>
    </div>
  )};

export default ContactForm;