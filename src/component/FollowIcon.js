import React from "react";

const FollowIcon = ({ link, icon }) => {
  return (
    <a href={link}>
      <i className={icon} />
    </a>
  );
};

export default FollowIcon;
