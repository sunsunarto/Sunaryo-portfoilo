import { useEffect, useRef } from "react";
import image from "../../assets/Achivments/certificate _07.jpg";
import "../../ComponentsStyle/AboutAch/ClassOf2024.css";
import gsap from "gsap";
import { Link } from "react-router-dom";

function ClassOf2024() {
  const buttonRef = useRef(null);
  const motionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".conClassOf2024",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

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
    <div className="conClassOf2024">
      <div className="classOf2024">
        <div className="aboutClassOf2024">
          <div className="image">
            <img src={image} alt="Class Of 2024" />
          </div>
          <div className="text">
            <h1>Second Place Class Of 2024</h1>
            <br />
            <p>
              Year: 12/06/2024
              <br />
              <br />
              About: in this Achievement I got the second place Class of 2024 in Mutiara Bangsa 3 School, Junior High School. It's like a batch for S1.
              <br />
              <br />
            </p>
            <div className="Back" ref={buttonRef}>
              <Link to="/" style={{ pointerEvents: "none" }}>Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassOf2024;

