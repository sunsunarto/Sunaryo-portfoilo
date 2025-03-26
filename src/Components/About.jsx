import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../ComponentsStyle/About.css";

const skills = [
  { name: "Python", progress: 20, color: "#3498db" },
  { name: "HTML", progress: 80, color: "#E34C26" },
  { name: "CSS", progress: 85, color: "#2965F1" },
  { name: "JS", progress: 70, color: "#F7DF1E" },
  { name: "Canva", progress: 90, color: "#00C9B7" },
  { name: "Figma", progress: 10, color: "#FF0033" },
  { name: "Capcut", progress: 95, color: "black" },
];

function About() {
  return (
    <div className="about">
      <h1>Skills</h1>
      <p>
        I'm a passionate software engineer with a strong interest in web development. I have experience with
        a variety of programming languages and frameworks, and I'm always looking to learn more.
      </p>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <CircularProgressbar className="progress"
              value={skill.progress}
              text={`${skill.progress}%`}
              styles={buildStyles({
                pathColor: skill.color,
                textColor: "#000",
              })}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

