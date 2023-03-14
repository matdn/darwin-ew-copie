import '../style/style.css';
import { useEffect } from 'react';
import blueDonut from '../assets/blueDonut.svg';

function Menu() {
    useEffect(() => {
      const title1 = document.querySelector("#title1")
      const cursor = document.querySelector(".cursor")
      title1.addEventListener("mouseover", function(){   
        cursor.classList.add("title1")
      })   
      title1.addEventListener("mouseout", function(){  
        cursor.classList.remove("title1")
      })   
    })
  return (
    <div className="Menu">
        <div className="titles">
            <h2 id="title1">Developpeur WEB étudiant <br/>et freelance... <br/> 
            <span>Votre projet se concrétise, <br/>mon avenir aussi ! </span></h2>
        </div>
        {/* <img src={blueDonut}/> */}
    </div>
  );
}

export default Menu;