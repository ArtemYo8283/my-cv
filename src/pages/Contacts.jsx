import React from 'react';
import { Element } from 'react-scroll';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import './Contacts.css';

const Contacts = () => {
  return (
    <Element name="contacts" className="contacts-section">
      <div className="contacts-container">
        <h1>Contacts</h1>
        <div className="contact-item">
          <MdEmail className="contact-icon" />
          <a href="mailto:bndr.artem.ua@gmail.com">bndr.artem.ua@gmail.com</a>
        </div>
        <div className="contact-item">
          <MdPhone className="contact-icon" />
          <span>+380 (66) 068-39-12</span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/artem-bondar-9a618426a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/ArtemYo8283"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <FaTelegram className="contact-icon" />
          <a
            href="https://t.me/bndrartem"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
        <div className="contact-item timezone">
          <AiOutlineClockCircle className="contact-icon" />
          <span>Kharkiv, Ukraine - GMT+2 (EET)</span>
        </div>
      </div>
    </Element>
  );
};

export default Contacts;
