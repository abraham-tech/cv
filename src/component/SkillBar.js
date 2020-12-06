import React from "react";
import ProgressArc from "progress-arc-component";
import styled from "styled-components";

const SkillBar = ({ title, value }) => {
  const dots = [];
  for (let i = 0; i < 5; i++) {
    dots.push(<span className={value > i ? "full" : "not_full"} />);
  }

  const RedArc = styled(ProgressArc)`
    /* height: 12em;
  width: 12em; */
    /* border: 0.3em solid black;
  border-radius: 0.5em; */
    padding: 1em;
  `;

  return (
    <div className="skill-bar">
      <span>
        <RedArc
          value={value}
          arcColor="rgba(2, 2, 133, 0.651)"
          textColor="black"
          rounded={true}
        />
        <p className="skill-bar-name">{title}</p>
      </span>
      {/* <div className="skill-bar_level">{dots}</div> */}
    </div>
  );
};

export default SkillBar;
