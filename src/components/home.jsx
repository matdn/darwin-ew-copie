import '../style/style.css';
import Trace1 from "../assets/trace1.svg"
import Trace2 from "../assets/trace2.svg"
import Matis from "../assets/Portfolio.mp4"

function Home() {
    // function atload(){
    //     const HomeBackround = document.querySelector(".HomeBackground")
    //     const scrollInstruction = document.querySelector(".scrollInstruction")
    //     HomeBackround.style.width = "95%"
    //     scrollInstruction.style.opacity = "1"
    //     HomeBackround.classList.add("animationAppearing")
    //     setTimeout(scrollInstruction.style.opacity = "1", 2000); 
    // }
    // window.onload=atload;
   
  return (
    <div className="Home panel">
        <div className="HomeBackground">
            <h1>PORTFOLIO</h1>
            <h1 className='specialFont'>matis</h1>
            <div className="border"></div>
            
            {/* <img className="trace1" src={Trace1} alt="" />*/}
            <div className="scrollInstruction">
                <h3>scroll to discover</h3>
                <div className="mouseScroll">
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;