import {useEffect, useRef} from "react";
import "../ComponentsStyle/Opening.css"
import gsap from "gsap";

function Opening() {

    const buttonRef = useRef(null)
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
            gsap.to(button, { scale: 1.3 });
          };
    
          const onMouseLeave = () => {
            if (gsap.isTweening(button)) {
              gsap.killTweensOf(button);
            }
            gsap.to(button, { scale: 1 });
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
            <div className="opening">
                <div className="text">
                    <p>I am a <span>front-end developer</span> from Indonesia</p>
                    <h1>Greetings and a warm welcome to</h1>
                    <h1>My Name, Sunaryo</h1>
                    <p>your gateway to my portfolio <br/>I choose in the of coding and design because I have a passion for coding and design.<br/> I also can speak english and chinese not to high just the daliy conversation.</p>
                    <button ref={buttonRef}>Project</button>
                </div>
                <div className="profileImg">
                    <img src="src/assets/WhatsApp Image 2025-03-25 at 10.25.43_4df92cc5.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Opening