import React from "react";

const SkillBar = ({ title, value }) => {
  const dots = [];
  for (let i = 0; i < 5; i++) {
    dots.push(<span className={value > i ? "full" : "not_full"} />);
  }

  return (
    <div className="skill-bar">
      <span className="skill-bar_name">{title}</span>
      <div className="skill-bar_level">{dots}</div>
    </div>
  );
};

export default SkillBar;
