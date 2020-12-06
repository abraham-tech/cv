import React from "react";
import "./styles.css";
import ContactLink from "./component/ContactLink.js";
import FollowIcon from "./component/FollowIcon.js";
import ResumeItem from "./component/ResumeItem.js";
import TimeRangeBlock from "./component/TimeRangeBlock.js";
import SkillBar from "./component/SkillBar.js";
import Interest from "./component/Interest.js";
import InterestItem from "./component/InterestItem.js";

const contactList = [
  {
    link: "tel:0767676395",
    icon: "fas fa-phone",
    children: <span>076-7676-395</span>
  },
  {
    link: "https://goo.gl/maps/K4EL2YiE6xjA1swJ",
    icon: "fas fa-map-marker",
    children: <span>Malmo, Sweden</span>
  },
  {
    link: "mailto:krissfrandsen@gmail.com",
    icon: "fas fa-envelope",
    children: <span>krissfrandsen</span>
  },
  {
    link: "google.com",
    icon: "fas fa-home",
    children: <span>krissfrandsen.com</span>
  }
];

const followList = [
  {
    link: "https://www.facebook.com/krissfrandsen",
    icon: "fab fa-facebook"
  },
  {
    link: "https://www.instagram.com/iamkrissyness/?hl=en",
    icon: "fab fa-instagram"
  },
  {
    link: "https://www.pinterest.se/krissfrandsen/",
    icon: "fab fa-pinterest"
  },
  {
    link: "https://www.linkedin.com/in/mary-kriss-frandsen-29ba4053/",
    icon: "fab fa-linkedin"
  },
  {
    link: "https://codepen.io/krissfran",
    icon: "fab fa-codepen"
  },
  {
    link: "https://github.com/krissfran",
    icon: "fab fa-github"
  }
];

const education = [
  {
    startDate: new Date("2019-09-02"),
    endDate: new Date("2020-01-21"),
    title: "Behörighetsgivande utbildning i svenska",
    children: (
      <>
        <p>Malmö University</p>
      </>
    )
  },
  {
    startDate: new Date("2005-10-21"),
    endDate: new Date("2009-11-02"),
    title: "Bachelor of Science in Nutrition",
    children: (
      <>
        <p>University of the Philippines</p>
      </>
    )
  }
];

const experience = [
  {
    startDate: new Date("2020-01-08"),
    endDate: new Date("ongoing"),
    title: "Waitress",
    children: (
      <>
        <p>Hai Restaurant</p>
        <p>Malmö, Sweden</p>
      </>
    )
  },
  {
    startDate: new Date("2012-09-30"),
    endDate: new Date("2013-05-30"),
    title: "Nutrition Advisor",
    children: (
      <>
        <p>Abbott Laboratories</p>
        <p>Manila, Philippines</p>
      </>
    )
  },
  {
    startDate: new Date("2009-11-30"),
    endDate: new Date("2012-08-30"),
    title: "Real Estate Agent",
    children: (
      <>
        <p>SM Development Corp.</p>
        <p>Manila, Philippines</p>
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
            <img
              src="https://i.pinimg.com/originals/15/d2/75/15d275683940f589ed37dc3a169b9fc3.gif"
              alt="avatar"
            />
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
