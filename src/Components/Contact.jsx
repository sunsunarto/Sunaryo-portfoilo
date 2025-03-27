import { useRef }from "react";
import { Link } from "react-router-dom";
import profile from "../assets/WhatsApp_Image_2025-03-25_at_10.25.43_4df92cc5-removebg-preview.png"
import "../ComponentsStyle/Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_8d81zn2', 'template_s42obp9', form.current, {
          publicKey: 'aMh1Ht8KAInX9vQ8U',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <div className="maincontactCon">
            <div className="navBar">
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Project">Project</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/">Back</Link></li>
                </ul>
            </div>
            <div className="contactCon">
                <h1>Contact</h1>
                <div className="contact">
                    <div className="contactLeft">
                        <img src={profile} alt="" />
                    </div>
                    <div className="contactRight">
                        <h2>Get in Touch</h2>
                        <p>Hi there, contact me to ask me about anything you have in mind.</p>
                        <p>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        <p>Here's a few ways to reach me:</p>
                        <form ref={form} onSubmit={sendEmail} className="contactForm">
                            <label>Name</label>
                            <input type="text" name="name" required/>
                            <label>Email</label>
                            <input type="text" name="title" required/>
                            <label>Message</label>
                            <textarea name="message" required/>
                            <input className="submit" type="submit" value="Send" />
                        </form>
                        
                        <ul>
                            <li><a href="https://www.linkedin.com/in/sunaryo-s-8b6b76246/" target="_blank">Linkedin</a></li>
                            <li><a href="https://github.com/sunaryos" target="_blank">Github</a></li>
                            <li><a href="https://www.instagram.com/sunaryos/" target="_blank">Instagram</a></li>
                            <li><a href="https://www.tiktok.com/@sunaryos" target="_blank">Tiktok</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact