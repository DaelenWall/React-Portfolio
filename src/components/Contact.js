import React, { useState } from 'react';
import '../styles/Contact.css'

function Contact() {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <section className="contact">
      <div className="contact-text">
        <h1 id="contact">Contact Me {' '}
          <button onClick={toggleVisibility}>
            {isListVisible ? '▲' : '▼'}
          </button>
        </h1>
        {isListVisible && (
          <ul>
            <li>Email: <em>daelenwall1@gmail.com</em></li>
            <li>Phone #: <em>(860)-992-4334</em></li>
            <li>GitHub: <em>DaelenWall</em></li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default Contact;