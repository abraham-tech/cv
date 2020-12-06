import React from "react";

const ContactLink = ({ link, icon, children }) => {
  return (
    <div className="resume-contact-info">
      <a href={link}>
        <i className={icon} />
        <span>{children}</span>
      </a>
    </div>
  );
};

export default ContactLink;
