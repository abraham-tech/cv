import React from "react";

const InterestItem = ({ title, children }) => {
  return (
    <div className="resume-item interest-item">
      <h2 className="interest-item__title">{title}</h2>
      <div className="interest-item-list">{children}</div>
    </div>
  );
};

export default InterestItem;
