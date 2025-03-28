import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Tzuchi from "../assets/R.jpg"
import MB3 from "../assets/Screenshot 2025-03-26 122523.png";
import TriRatna from "../assets/logo_tri_ratna-removebg-preview.png";
import Cer1 from "../assets/Achivments/certificate _01.jpg"
import Cer2 from "../assets/Achivments/certificate _02.jpg"
import Cer3 from "../assets/Achivments/certificate _03.jpg"
import Cer4 from "../assets/Achivments/certificate _04.jpg"
import Cer5 from "../assets/Achivments/certificate _05.jpg"
import Cer6 from "../assets/Achivments/certificate _06.png"
import Cer7 from "../assets/Achivments/certificate _07.jpg"

import "../ComponentsStyle/About.css";

const skills = [
  { name: "Python", progress: 10, color: "#3498db", },
  { name: "HTML", progress: 70, color: "#E34C26", },
  { name: "CSS", progress: 70, color: "#2965F1", },
  { name: "JS", progress: 60, color: "#F7DF1E", },
  { name: "C++", progress: 20, color: "#61DAFB", },
  { name: "Canva", progress: 90, color: "#00C9B7", },
  { name: "Figma", progress: 10, color: "#FF0033", },
  { name: "Capcut", progress: 90, color: "white", },
  { name: "Blender", progress: 5, color: "#E34C26"},
  { name: "SweetHome3d", progress: 90, color: "navy-blue"},
];

function About() {
  return (
    <div className="about">
      <div className="navBar">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Project">Projects</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
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
              value={skill.progress}
              text={`${skill.progress}%`}
              styles={buildStyles({
                pathColor: skill.color,
                textColor: "black",
              })}/>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <h2 className="eduAch">Education & Achievement</h2>
      <div className="eduAndAch">
        <div className="education">
          <h1>Education</h1>
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
        <div className="achivement">
          <h2>Achievements</h2>
          <div className="achCon">
            <div className="ach indexAch1">
              <div className="achImg">
                <img src={Cer1} alt="" />
              </div>
              <div className="AchText">
                <h2>弟子规 (Di Zi Gui)</h2>
                <p>11/12/2016</p>
              </div>
            </div>
            <div className="ach indexAch2">
              <div className="achImg">
                <img src={Cer2} alt="" />
              </div>
              <div className="AchText">
                <h2>taekwondo</h2>
                <p>11/12/2016</p>
              </div>
            </div>
            <div className="ach indexAch3">
              <div className="achImg">
                <img src={Cer3} alt="" />
              </div>
              <div className="AchText">
                <h2>HSK 2</h2>
                <p>03/12/2017</p>
              </div>
            </div>
            <div className="ach indexAch4">
              <div className="achImg">
                <img src={Cer4} alt="" />
              </div>
              <div className="AchText">
                <h2>讀經班 (Du Jing Ban)</h2>
                <p>07/07/2022</p>
              </div>
            </div>
            <div className="ach indexAch5">
              <div className="achImg">
                <img src={Cer5} alt=""/>
              </div>
              <div className="AchText">
                <h2>Anggota Pramuka</h2>
                <p>31/1/2024</p>
              </div>
            </div>
            <div className="ach indexAch6">
              <div className="achImg">
                <img src={Cer6} alt="" />
              </div>
              <div className="AchText">
                <h2>Webinar Portofoilo</h2>
                <p>27/03/2025</p>
              </div>
            </div>
            <div className="ach indexAch7">
              <div className="achImg">
                <img src={Cer7} alt="" />
              </div>
              <div className="AchText">
                <h2>second place class of 2024</h2>
                <p>13/06/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


