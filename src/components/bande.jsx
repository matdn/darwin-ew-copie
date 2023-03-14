import '../style/style.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {useEffect} from "react";

function Bande() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".bande1",{
      scrollTrigger: {
          trigger: ".Bande",
          start: "center center",
          end: '+=900',
          scrub: 1
      },
      x: -10750, 
      y: 0, 
    });
    gsap.to(".bande2",{
      scrollTrigger: {
          trigger: ".Bande",
          start: "center center",
          end: '+=900',
          scrub: 1
      },
      x: 1650, 
      y: 640,
    });
    gsap.to(".bande3",{
      scrollTrigger: {
          trigger: ".Bande",
          start: "center center",
          end: '+=900',
          scrub: 1
      },
      x: -1650, 
      y: 440,
    });
    gsap.to(".bande4",{
      scrollTrigger: {
          trigger: ".Bande",
          start: "center center",
          end: '+=900',
          scrub: 1
      },
      x: 7650, 
      y: 240, 
    });
  })
  return (
    <div className="Bande">     
      <div className="flex bande1"> 
        <p>Projects - Projects -  Projects - Projects - Projects</p>
      </div>
      <div className="flex bande2"> 
        <p>Projects - Projects -  Projects - Projects - Projects</p>      
      </div>
      <div className="flex bande3"> 
        <p>Projects - Projects -  Projects - Projects - Projects</p>      
      </div>
      <div className="flex bande4"> 
        <p>Projects - Projects -  Projects - Projects - Projects</p>      
      </div>
    </div>
    
  );
}

export default Bande;