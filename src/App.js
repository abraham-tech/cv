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
    icon: "fas fa-book"
  },
  {
    icon: "fas fa-film"
  },
  {
    icon: "fas fa-headphones"
  },
  {
    icon: "fas fa-gamepad"
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
            <h1 className="name">Kriss Frandsen</h1>
            <h2 className="career">Front-end Developer</h2>
          </div>
          <div className="resume-about">
            <h3>About Me</h3>
            <p>
              I'm a Front-end Developer and a mom. I consider myself "forever
              student" as I love learning and searching on the web. I am firm
              believer of if you want to do something, do it!
            </p>
          </div>
          <div className="resume-contact">
            <h3>Contact Me</h3>
            <div className="resume-contact-info">
              {contactList.map(item => (
                <ContactLink key={item.link} {...item} />
              ))}
            </div>
          </div>
          <div className="resume-follow">
            <h3>Follow Me</h3>
            <div className="resume-follow-icons">
              {followList.map(item => (
                <FollowIcon key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="resume-right">
        <ResumeItem title="Education">
          {education.map(item => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>
        <ResumeItem title="Experience">
          {experience.map(item => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>
        <ResumeItem title="Skills">
          <SkillBar title="HTML5" value={4} />
          <SkillBar title="CSS3" value={4} />
          <SkillBar title="Javascript" value={3} />
          <SkillBar title="ReactJs" value={3} />
          <SkillBar title="Photoshop" value={3} />
          <SkillBar title="Microsoft Office" value={4} />
        </ResumeItem>
        <InterestItem title="Interests">
          {interests.map(item => (
            <Interest {...item} />
          ))}
        </InterestItem>
      </div>
    </div>
  );
}
