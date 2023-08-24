import appleLogo from "./images/appleLogo.png";
import stars from "./images/stars.png";
import desktop from "./images/desktop.png";
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
  }, []);
  return (
    <div id="section1">
      <section className="text">
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
