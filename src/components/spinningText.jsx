import '../style/style.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {useEffect} from "react";

function SpinningText() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // let j = 20;
        // for (let i = 1; i < 8; i++) {   
        //     j = j+20;     
        //     console.log(j);
        //     gsap.to(".btn__flip"+i,{
        //         scrollTrigger: {
        //             trigger: ".Dtext",
        //             start: "top",
        //             end: '+=300',
        //             scrub:1
        //         },
        //         rotateX: -90
        //     });
        // }
        gsap.to(".btn__flip1",{
            scrollTrigger: {
                trigger: ".Dtext",
                start: "top 0",
                end: '+=300',
                scrub:1
            },
            rotateX: -90
        });
        gsap.to(".btn__flip2",{
            scrollTrigger: {
                trigger: ".Dtext",
                start: "top 40",
                end: '+=300',
                scrub:1
            },
            rotateX: -90
        });
        gsap.to(".btn__flip3",{
            scrollTrigger: {
                trigger: ".Dtext",
                start: "top 80",
                end: '+=300',
                scrub:1
            },
            rotateX: -90
        });
        gsap.to(".btn__flip4",{
            scrollTrigger: {
                trigger: ".Dtext",
                start: "top 120",
                end: '+=300',
                scrub:1
            },
            rotateX: -90
        });
        gsap.to(".btn__flip5",{
            scrollTrigger: {
                trigger: ".Dtext",
                start: "top 160",
                end: '+=300',
                scrub:1
            },
            rotateX: -90
        });
        gsap.to(".btn__flip6",{
            scrollTrigger: {
                trigger: ".Dtext",
                start: "top 200",
                end: '+=300',
                scrub:1
            },
            rotateX: -90
        });
        gsap.to(".btn__flip7",{
            scrollTrigger: {
                trigger: ".Dtext",
                start: "top 240",
                end: '+=300',
                scrub:1
            },
            rotateX: -90
        });
    });
    return(
      <section className="Dtext">
      <div className="Dtext__recyclable">
              <div class="About3D" id="about">
                  <div>
                      <div class="btn3d">
                              <div class="btn__flip btn__flip1 ">
                                  <h1 class="btn__flip--off">C</h1>
                                  <h1 class="btn__flip--on">C</h1>
                              </div>
                          </div>
                          <div class="btn3d">
                              <div class="btn__flip btn__flip2 ">
                                  <h1 class="btn__flip--off">U</h1>
                                  <h1 class="btn__flip--on">R</h1>
                              </div>
                          </div>
                          <div class="btn3d">
                              <div class="btn__flip btn__flip3 ">
                                  <h1 class="btn__flip--off">R</h1>
                                  <h1 class="btn__flip--on">E</h1>
                              </div>
                          </div>
                          <div class="btn3d">
                              <div class="btn__flip btn__flip4 ">
                                  <h1 class="btn__flip--off">I</h1>
                                  <h1 class="btn__flip--on">A</h1>
                              </div>
                          </div>
                          <div class="btn3d">
                              <div class="btn__flip btn__flip5 ">
                                  <h1 class="btn__flip--off">E</h1>
                                  <h1 class="btn__flip--on">T</h1>
                              </div>
                          </div>
                          <div class="btn3d">
                              <div class="btn__flip btn__flip6 ">
                                  <h1 class="btn__flip--off">U</h1>
                                  <h1 class="btn__flip--on">I</h1>
                              </div>
                          </div>
                          <div class="btn3d">
                              <div class="btn__flip btn__flip7 ">
                                  <h1 class="btn__flip--off">X</h1>
                                  <h1 class="btn__flip--on">F</h1>
                              </div>
                          </div>
                        </div>
                  </div>
              </div>
      </section>
    );
}
export default SpinningText;