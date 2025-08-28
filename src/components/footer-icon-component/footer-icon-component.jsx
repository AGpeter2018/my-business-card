import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "./footer-icon-style.css";

const FooterIconComponent = () => {
  return (
    <div className="footer-icon-container">
      <a
        href="https://x.com/AdenijiPet52714?t=7p0vbj0_F1RqAuiDu_q63w&s=09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>

      <a
        href="https://www.instagram.com/invites/contact/?igsh=ek429sim1lgu&utm_content=228ty80"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.facebook.com/share/19SpeJJfT8/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://github.com/AGpeter2018"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default FooterIconComponent;
