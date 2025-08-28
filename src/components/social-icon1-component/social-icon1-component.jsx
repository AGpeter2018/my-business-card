import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import "./social-icon1-style.css";

const SocialIcon1 = () => {
  return (
    <div className="iconProperty">
      <a className="emailBody" href="mailto:adenijipeter@gmail.com">
        <FaEnvelope className="iconEmail" />
        Email
      </a>
      <a
        className="linkedinBody"
        href="https://www.linkedin.com/in/adeniji-peter-6342511bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      >
        <TiSocialLinkedin className="iconLinkedin" />
        Linkedin
      </a>
    </div>
  );
};

export default SocialIcon1;
