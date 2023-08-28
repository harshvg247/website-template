// Meet the ahead app
import desktop from "../images/desktop1.png";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  useEffect(() => {

    var t1 = gsap.timeline({scrollTrigger:{trigger: "#section4 .heading h1", start:"0 80%",end: "0px 80%", toggleActions: "restart none reset reverse"}});
    t1.fromTo("#section4 .heading p, #section4 .heading h1", {x: -200, opacity:0}, {x:40, opacity: 1, duration: .6, });
    t1.to("#section4 .heading p, #section4 .heading h1", {x:0, duration: .3});
  }, []);

  return (
    <div id="section4">
      <div class="heading">
        <p>Built out of frustration</p>
        <h1>Meet the ahead app</h1>
        <img src={desktop} alt="" />
      </div>
      <div class="text">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sequi similique a deserunt illo fugit ducimus in suscipit consequatur
          impedit!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
          inventore.
        </p>
      </div>
    </div>
  );
};

export default Section4;
