import React from "react";

const Interest = ({ icon, name }) => {
  return (
    <div className="interest-item">
      <div className="interest-item_list">
        <i className={icon} />
      </div>
    </div>
  );
};

export default Interest;
