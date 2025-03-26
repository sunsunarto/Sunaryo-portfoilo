import {useEffect, useRef} from "react";
import "../ComponentsStyle/Opening.css"
import gsap from "gsap";
import { Link } from "react-router-dom";
import PortofoiloImg from "../assets/WhatsApp_Image_2025-03-25_at_10.25.43_4df92cc5-removebg-preview.png";

function Opening() {

    const buttonRef = useRef(null);
    const motionRef = useRef(null);

    useEffect(() => { //openingFolder
        gsap.fromTo('.openingFolder', {
            opacity: 0,
            duration: 1,
            y: -300
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
        })
    }, [])
    
    useEffect(() => { //move R ProfileImg
        gsap.fromTo('.profileImg', {
            opacity: 0,
            duration: 1,
            x: 300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power4.out',
        })
    })

    useEffect(() => { //move L ProfileImg
        gsap.fromTo('.text', {
            opacity: 0,
            duration: 1,
            x: -300        
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power4.out',
        }
    )})

    useEffect(() => { //Button
        const ctx = gsap.context(() => {
    
          const button = buttonRef.current;
    
          const onMouseEnter = () => {
            if (gsap.isTweening(button)) {
              gsap.killTweensOf(button);
            }
            gsap.to(button, { scale: 1.3, backgroundColor: 'red',  color: 'white' });
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
        <div className="openingFolder">
          <div className="navBar">
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/">Back</Link></li>
            </ul>
        </div>
            <div className="opening">
                <div className="text">
                    <p>I am a <span>front-end developer</span> from Indonesia</p>
                    <h1>Greetings,</h1>
                    <h1>My Name, Sunaryo</h1>
                    <p>your gateway to my resume <br/>I dive into the world of coding and design because I have a passion for it.<br/> I can code using HTML, CSS, JavaScript and a little bit of C++<br/>I also can speak Indonesian, English, and Chinese—not too much, just the daily conversation.</p>
                    <button ref={buttonRef}>Project</button>
                </div>
                <div className="profileImg">
                    <img src={PortofoiloImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Opening