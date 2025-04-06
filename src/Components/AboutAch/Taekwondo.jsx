import { useEffect, useRef } from "react";
import image from "../../assets/Achivments/certificate _02.jpg";
import "../../ComponentsStyle/AboutAch/Taekwondo.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

function Taekwondo() {
  const moreInfoRef = useRef(null);
  const backRef = useRef(null);
  const motionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".conTaekwondo",
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const moreInfoButton = moreInfoRef.current;
      const backButton = backRef.current;

      const handleMouseEnter = (button) => {
        if (gsap.isTweening(button)) {
          gsap.killTweensOf(button);
        }
        gsap.to(button, { scale: 1.3, backgroundColor: "red", color: "white" });
      };

      const handleMouseLeave = (button) => {
        if (gsap.isTweening(button)) {
          gsap.killTweensOf(button);
        }
        gsap.to(button, { scale: 1, backgroundColor: "#F5F5F5", color: "black" });
      };

      const handleMouseDown = (button) => {
        if (gsap.isTweening(button)) {
          gsap.killTweensOf(button);
        }
        gsap.to(button, { scale: 0.9, duration: 0.1, ease: "power1.inOut" });
      };

      const handleMouseUp = (button) => {
        if (gsap.isTweening(button)) {
          gsap.killTweensOf(button);
        }
        gsap.to(button, { scale: 1.2, duration: 0.5, ease: "bounce.out" });
      };

      [moreInfoButton, backButton].forEach((button) => {
        button.addEventListener("mouseenter", () => handleMouseEnter(button));
        button.addEventListener("mouseleave", () => handleMouseLeave(button));
        button.addEventListener("mousedown", () => handleMouseDown(button));
        button.addEventListener("mouseup", () => handleMouseUp(button));
      });

      return () => {
        [moreInfoButton, backButton].forEach((button) => {
          button.removeEventListener("mouseenter", () => handleMouseEnter(button));
          button.removeEventListener("mouseleave", () => handleMouseLeave(button));
          button.removeEventListener("mousedown", () => handleMouseDown(button));
          button.removeEventListener("mouseup", () => handleMouseUp(button));
        });
      };
    }, motionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="conTaekwondo">
      <div className="Taekwondo">
        <div className="aboutTaekwondo">
          <div className="image">
            <img src={image} alt="Taekwondo" />
          </div>
          <div className="text">
            <h1>Taekwondo Indonesia</h1><br/>
            <p>year: 11/12/2016<br/><br/>About: This is a certificate about Taekwondo. I got it from attending the Taekwondo extracurricular at Tzuchi school. this certificate shows that i already at yellow green belt </p><br/>
            <div className="linkAndBack">
              <div className="Link" ref={moreInfoRef}>
                <a href="https://taekwondo.or.id">More Information about Taekwondo</a>
              </div>
              <div className="Back" ref={backRef}>
                <Link to="/">Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taekwondo;