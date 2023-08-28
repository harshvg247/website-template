import appleLogo from "../images/appleLogo.png";
import stars from "../images/stars.png";
import desktop from "../images/desktop.png";
import leaf1 from "../images/leaf.png";
import leaf2 from "../images/leaf2.png";
import flower1 from "../images/flower1.png";
import flower2 from "../images/flower2.png";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
    
  let desktopItem = useRef(null);
  let innerContainerItem = useRef(null);
  useEffect(() => {
    // gsap.fromTo(
    //     desktopItem,
    //     { xPercent: 100, opacity: 0, height: "0%", rotation: 270},
    //     { xPercent: 0, opacity: 1, duration: 1, rotation: 360, height: "90%", scrollTrigger: {
    //         trigger: innerContainerItem,
    //         toggleActions: "play none none none"            
    //     } }
    //   );
      // gsap.fromTo(
      //   desktopItem,
      //   { rotationY: 90},
      //   {  rotationY: 0,duration:1, opacity:1, scrollTrigger: {
      //       trigger: innerContainerItem,
      //       toggleActions: "play none none none"            
      //   } }
      // );
      var t1 = gsap.timeline({scrollTrigger:{
        trigger: innerContainerItem
      }});
      t1.fromTo(
        desktopItem,
        { rotationY: 90},
        {  rotationY: 0,duration:1, opacity:1 }
      )
    gsap.fromTo(
      innerContainerItem,
      { yPercent: 20, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1 }
    );
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".leaf1",
      },
    });
    t2.fromTo(
      [".leaf1", ".leaf2"],
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 4, rotateZ:"+=30", ease:"elastic" }
    );
    gsap.fromTo(
      [".flower1", ".flower2"],
      { rotationZ: 0},
      {  rotationZ: 360,duration:8, opacity:1,repeat:-1,ease:"none", scrollTrigger: {
          trigger: ".flower1",
          toggleActions: "play none none none"            
      } }
    );
  }, []);
  return (
    <div id="section1">
      <section className="text">
      <div className="leaf1">
          <img src={leaf2} alt="" />
        </div>
        <div className="leaf2">
          <img src={leaf2} alt="" />
        </div>
        <div className="flower1">
          <img src={flower1} alt="" />
        </div>
        <div className="flower2">
          <img src={flower2} alt="" />
        </div>        
        <div
          ref={(el) => {
            innerContainerItem = el;
          }}
          className="innerContainer"
        >
          
          <p className="subtitle">Ahead App</p>
          <p className="title">Master your life by mastering emotions</p>
          <div className="rating">
            <button className="appStoreButton">
              <img src={appleLogo} alt="" className="appleLogo" />
              <section className="appStoreButtonText">
                <p className="logoTitle">Download on the</p>
                <p className="logoSubtitle">App Store</p>
              </section>
            </button>
            <div className="stars">
              <img src={stars} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="image">
        <div className="circle"></div>
        <img
          ref={(el) => {
            desktopItem = el;
          }}
          src={desktop}
          alt=""
        />
      </section>
    </div>
  );
};

export default Section1;
