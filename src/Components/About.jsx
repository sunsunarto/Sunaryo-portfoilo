import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Tzuchi from "../assets/R.jpg"
import MB3 from "../assets/Screenshot 2025-03-26 122523.png";
import TriRatna from "../assets/logo_tri_ratna-removebg-preview.png";

import "../ComponentsStyle/About.css";

const skills = [
  { name: "Python", circle: 100, color: "#3498db", },
  { name: "HTML", circle: 100, color: "#E34C26", },
  { name: "CSS", circle: 100, color: "#2965F1", },
  { name: "JS", circle: 100, color: "#F7DF1E", },
  { name: "C++", circle: 100, color: "#61DAFB", },
  { name: "Canva", circle: 100, color: "#00C9B7", },
  { name: "Figma", circle: 100, color: "#FF0033", },
  { name: "Capcut", circle: 100, color: "white", },
];

function About() {
  return (
    <div className="about">
      <div className="navBar">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Project">Projects</Link></li>
          <li><Link to="/">Back</Link></li>
        </ul>
      </div>
      <h1>Skills</h1>
      <p className="descriptionSkill">
        I'm a passionate software engineer with a strong interest in web development. I have experience with
        a variety of programming languages and frameworks, and I'm always looking to learn more.
      </p>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <CircularProgressbar
              className="progress"
              value={skill.circle}

              styles={buildStyles({
                pathColor: skill.color,
                textColor: "#fff",
              })}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="eduAndAchiev">
        <div className="education">
          <h2>Education & Achievement</h2>
          <div className="eduCon index1">
            <div className="edu">
              <div className="eduLogo">
                <a href="https://tzuchi.sch.id" target="_blank" rel="noopener noreferrer">
                  <img className="LogoTzuchi" src={Tzuchi} alt="logo" />
                </a>
              </div>
              <div className="eduText">
                <p className="year">2015-2019</p>
                <h2>Tzuchi school</h2>
                <p>Primary School</p>
              </div>
            </div>
          </div>
          <div className="eduCon index2">
            <div className="edu">
              <div className="eduLogo">
                <a href="https://site.mutiarabangsa.sch.id" target="_blank" rel="noopener noreferrer">
                  <img src={MB3} alt="logo" />
                </a>
              </div>
              <div className="eduText">
                <p className="year">2019-2021</p>
                <h2>Mutiara Bangsa 3 School</h2>
                <p>Primary School</p>
              </div>
            </div>
          </div>
          <div className="eduCon index3">
            <div className="edu">
              <div className="eduLogo">
                <a href="https://site.mutiarabangsa.sch.id" target="_blank" rel="noopener noreferrer">
                  <img src={MB3} alt="logo" />
                </a>
              </div>
              <div className="eduText">
                <p className="year">2021-2024</p>
                <h2>Mutiara Bangsa 3 School</h2>
                <p>Junior High School</p>
              </div>
            </div>
          </div>
          <div className="eduCon index4">
            <div className="edu">
              <div className="eduLogo">
                <a href="https://www.triratna.sch.id/" target="_blank" rel="noopener noreferrer">
                  <img src={TriRatna} alt="logo" />
                </a>
              </div>
              <div className="eduText">
                <p className="year">2024-now</p>
                <h2>Sekolah Tri Ratna</h2>
                <p>Senior High School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

