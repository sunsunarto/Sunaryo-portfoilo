import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import gsap from "gsap";
import OpeningScroll from '../ComponentForScroll/OpeningScroll.jsx'
import AboutScroll from '../ComponentForScroll/AboutScroll.jsx'
import ProjectScroll from '../ComponentForScroll/ProjectScroll.jsx'
import ContactScroll from '../ComponentForScroll/ContactScroll.jsx'
import Footer from "./Footer.jsx";
import "../ComponentsStyle/Header.css";

function Header() {
  const textRef = useRef(null);
  // const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const buttonRef = useRef(null);
  const motionRef = useRef(null);

  useEffect(() => { //beside sunsunarto
    const options = {
      strings: ["front-end", "developer", "designer", "creator"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };
    const typed = new Typed(textRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  
  // useEffect(() => { //welcome
  //   const options = {
  //     strings: ["", "Instagram", "Tiktok"],
  //     typeSpeed: 50,
  //     backSpeed: 30,
  //     backDelay: 1000,
  //     startDelay: 500,
  //     loop: true,
  //   };
  //   const typed = new Typed(textRef2.current, options);
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  useEffect(() => { //coding language
    const options = {
      strings: ["HTML", "CSS", "JavaScript"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };
    const typed = new Typed(textRef3.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => { //Button
    const ctx = gsap.context(() => {

      const button = buttonRef.current;

      const onMouseEnter = () => {
        if (gsap.isTweening(button)) {
          gsap.killTweensOf(button);
        }
        gsap.to(button, { scale: 1.3, backgroundColor: '#D84040',  color: 'white' });
      };

      const onMouseLeave = () => {
        if (gsap.isTweening(button)) {
          gsap.killTweensOf(button);
        }
        gsap.to(button, { scale: 1, backgroundColor: '#F5F5F5', color: 'black' });
      };

      const onMouseDown = () => {
        if (gsap.isTweening(button)) {
          gsap.killTweensOf(button);
        }
        gsap.to(button, { scale: 0.9, duration: 0.1, ease: 'power1.inOut' });
      };

      const onMouseUp = () => {
        if (gsap.isTweening(button)) {
          gsap.killTweensOf(button);
        }
        gsap.to(button, { scale: 1.2, duration: 0.5, ease: 'bounce.out' });
      };

      button.addEventListener('mouseenter', onMouseEnter);
      button.addEventListener('mouseleave', onMouseLeave);
      button.addEventListener('mousedown', onMouseDown);
      button.addEventListener('mouseup', onMouseUp);

      return () => {
        button.removeEventListener('mouseenter', onMouseEnter);
        button.removeEventListener('mouseleave', onMouseLeave);
        button.removeEventListener('mousedown', onMouseDown);
        button.removeEventListener('mouseup', onMouseUp);
      };
    }, motionRef);

    return () => ctx.revert(); 

  }, []);

  return (
    <div className="HeaderContainer">
      <div className="headerSection">
        <div className="mainHeader">
          <div className="header">
            <h4><span className="Textsun">sunsunarto</span> | <span ref={textRef}></span></h4>
              <div className="nav">
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Project">Project</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
              </div>
          </div>
        </div>
        <div className="headerOpening">
            <div className="openingText">
                <h1><span className="textWelcome">Welcome</span>, to Sunaryo,S Portfolio</h1>
                <h3>Languages</h3>
                <p className="codingName"><span ref={textRef3}></span><br/></p>
            </div>
            <div className="scrolldown">
              <Link to="/Home" ref={buttonRef} className="buttonDiveIn"> Dive in</Link>
            </div>
        </div>
        </div>
        <OpeningScroll/>
        <AboutScroll/>
        <ProjectScroll/>
        <ContactScroll/>
        <Footer/>
    </div>
  );
}

export default Header;

