import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import "../ComponentsStyle/Header.css";

function Header() {
  const textRef = useRef(null);

  useEffect(() => {
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

  return (
    <div className="HeaderContainer">
        <div className="mainHeader">
          <div className="header">
            <h4><span className="Textsun">sunsunarto</span> | <span ref={textRef}></span></h4>
              <div className="nav">
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
              </div>
            </div>

        </div>
    </div>
  );
}

export default Header;

