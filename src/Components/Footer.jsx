import React from "react";
import youtube from "../assets/YouTube-Logo.png";
import github from "../assets/GitHub-Logo.png";
import Ig from "../assets/instagram-logo-instagram-icon-transparent-free-png.webp";
import "../ComponentsStyle/Footer.css";
function Footer() {
    return (
        <div className="FooterCon">
            <div className="footerText">
                <h1>get in touch</h1>
                <p>© 2025 Sunaryo. All rights reserved.</p>
                <p>Designed with passion. Built with purpose." © 2025 Sunaryo</p>
                <p>Let's create something amazing together! Reach out at sunaryo24259@outlook.com</p>
                <div className="followMe">
                    <h3>Follow Me</h3>
                    <div className="followLinks">
                        <div className="youtube">
                            <img src={youtube} alt="" />
                            <a href="https://www.youtube.com/@artos2166" target="_blank">Youtube</a>
                        </div>
                        <div className="github">
                            <img src={github} alt="" />
                            <a href="https://github.com/sunsunarto" target="_blank">Github</a>
                        </div>
                        <div className="ig">
                            <img src={Ig} alt="" />
                            <a href="https://www.instagram.com/artos216/" target="_blank">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;