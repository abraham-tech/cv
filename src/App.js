import React from "react";
import "./styles.css";
import ContactLink from "./component/ContactLink.js";
import FollowIcon from "./component/FollowIcon.js";
import ResumeItem from "./component/ResumeItem.js";
import TimeRangeBlock from "./component/TimeRangeBlock.js";
import SkillBar from "./component/SkillBar.js";
import Interest from "./component/Interest.js";
import InterestItem from "./component/InterestItem.js";
var imageName = require("./assets/profile1.jpg");

const contactList = [
  {
    link: "tel:+4673-3339-4515",
    icon: "fas fa-phone",
    children: <span>+4673-3339-4515</span>
  },
  {
    link: "https://goo.gl/maps/eAQZZpskCs8D81gh9",
    icon: "fas fa-map-marker",
    children: <span>Stockholm, Sweden</span>
  },
  {
    link: "mailto:abraham.mathewos.meja@gmail.com",
    icon: "fas fa-envelope",
    children: <span>abraham.mathewos.meja</span>
  },
  {
    link: "https://goo.gl/maps/57xTURCphyqFNWaE6",
    icon: "fas fa-home",
    children: <span> Saltsjöbaden </span>
  }
];

const followList = [
  {
    link: "https://www.facebook.com/abraham.mathewos.1/",
    icon: "fab fa-facebook"
  },
  {
    link: "https://www.instagram.com/abraham.mathewos/?hl=en",
    icon: "fab fa-instagram"
  },
  {
    link: "https://www.pinterest.se/",
    icon: "fab fa-pinterest"
  },
  {
    link: "https://www.linkedin.com/in/abraham-mathewos-62aa02138/",
    icon: "fab fa-linkedin"
  },
  {
    link: "https://codesandbox.io/u/abraham-tech",
    icon: "fab fa-codepen"
  },
  {
    link: "https://github.com/abraham-tech",
    icon: "fab fa-github"
  }
];

const education = [
  {
    startDate: new Date("2013"),
    endDate: new Date("2018"),
    title: "Bachelor of Science in Software Engineering",
    children: (
      <>
        <p>Addis Ababa University</p>
      </>
    )
  },
  {
    startDate: new Date("2016"),
    endDate: new Date("2016"),
    title: "IBM - Mobile Application Developer with Worklight",
    children: (
      <>
        <p>University of the Philippines</p>
      </>
    )
  }
];

const experience = [
  {
    startDate: new Date("2018"),
    endDate: new Date("2020"),
    title: "MED INNOVATION",
    children: (
      <>
        <p>Full-stack developer</p>
        <p>remote, Italy</p>
      </>
    )
  },
  {
    startDate: new Date("2018"),
    endDate: new Date("2018"),
    title: "360Ground",
    children: (
      <>
        <p>Junior Developer</p>
        <p>Internship, Ethiopia</p>
      </>
    )
  },
  {
    startDate: new Date("2016"),
    endDate: new Date("2016"),
    title: "YYT International Software Development",
    children: (
      <>
        <p>Tester and Developer</p>
        <p>part-time, Ethiopia</p>
      </>
    )
  }
];

const interests = [
  {
    icon: "fas fa-laptop-code"
  },
  {
    icon: "fas fa-film"
  },
  {
    icon: "fas fa-headphones"
  },
  {
    icon: "fas fa-running"
  }
];

export default function App() {
  return (
    <div className="resume">
      <div className="resume-left">
        <div className="resume-profile">
          <div className="resume-profile-img">
            <img src={imageName} alt="avatar" />
          </div>
          <div className="resume-profile-info">
            <h1 className="name">Abraham Mathewos</h1>
            <h2 className="career">Full-stack Developer</h2>
          </div>
          <div className="resume-about">
            <h3>About Me</h3>
            <p>
              I love computers and technology, and above all Internet, which
              connects computers and IoT devices and makes them alive.
              Developers are superheroes, they solve real-life problems using
              technology. Everybody wants to be a superhero. Therefore, it
              requires a lot of sacrifices to put some effort into learning new
              technologies every day. That's why I call myself a
              <b> Life Long Learner</b>.
            </p>
          </div>
          <div className="resume-contact">
            <h3>Contact Me</h3>
            <div className="resume-contact-info">
              {contactList.map((item) => (
                <ContactLink key={item.link} {...item} />
              ))}
            </div>
          </div>
          <div className="resume-follow">
            <h3>Follow Me</h3>
            <div className="resume-follow-icons">
              {followList.map((item) => (
                <FollowIcon key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="resume-right">
        <ResumeItem title="Education">
          {education.map((item) => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>
        <ResumeItem title="Experience">
          {experience.map((item) => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>
        <ResumeItem title="Skills">
          <div classNam="row">
            <div className="column">
              <SkillBar title="MERN stack" value={90} />
              <SkillBar title="Python" value={80} />
              <SkillBar title="Java" value={80} />
            </div>
            <div className="column">
              <SkillBar title="ReactJs" value={93} />
              <SkillBar title="Docker & VM" value={93} />
              <SkillBar title="Nodejs" value={94} />
            </div>
          </div>
        </ResumeItem>
        <InterestItem title="Interests">
          {interests.map((item) => (
            <Interest {...item} />
          ))}
        </InterestItem>
      </div>
    </div>
  );
}
