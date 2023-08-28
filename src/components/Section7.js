import React, { useEffect } from "react";
import "../styles/section7.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Section7() {
  useEffect(() => {
    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section7 h5",
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none reset reverse",
      },
    });
    t1.fromTo(
      "#section7 h5",
      { x: -200, opacity: 0 },
      { x: 40, opacity: 1, duration: 0.6 }
    );
    t1.to("#section7 h5", { x: 0, duration: 0.3 });
    var t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section7 h5",
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none reset reverse",
      },
    });
    t2.fromTo(
      "#section7 h2",
      { x: 200, opacity: 0 },
      { x: -40, opacity: 1, duration: 0.6 }
    );
    t2.to("#section7 h2", { x: 0, duration: 0.3 });

      const pathitems = document.querySelectorAll(".path-item");

      var t3 = gsap.timeline({
        scrollTrigger: {
          trigger: pathitems,
          start: "0 80%",
          end: "0px 80%",
          toggleActions: "restart none reverse reverse",
        },
      });
      for(let i=0;i<pathitems.length;i++){
        t3.fromTo(
          pathitems[i],
          { rotateZ:180, opacity: 0 },
          { rotateZ:-20, opacity: 1, duration: 0.5 }
        );
        t3.to(pathitems[i], { rotateZ:0, duration: 0.2 });
      }
      

  }, []);

  return (
    <div id="section7">
      <h5>This a some kind of a subtitle</h5>
      <h2>But this is a title!</h2>
      <div id="procedure-chart">
        <div className="procedure-step" data-text="This is the step 1">
          <span>1</span>
        </div>
        <div
          className="procedure-step"
          data-text="This is the step 2. It comes after step 1"
        >
          <span>2</span>
        </div>
        <div
          className="procedure-step"
          data-text="This is the step 3, the last one!"
        >
          <span>3</span>
        </div>
      </div>
      <div id="path-chart">
        <div id="path-line">
          <div
            className="path-item"
            data-text="You"
            style={{ backgroundColor: "#6241eb" }}
          ></div>
          <div
            className="path-item"
            data-text="Anonymous 1"
            style={{ backgroundColor: "#41c2fc" }}
          ></div>
          <div
            className="path-item"
            data-text="Anonymouse 2"
            style={{ backgroundColor: "#ffb53a" }}
          ></div>
          <div
            className="path-item"
            data-text="Anonymouse 3"
            style={{ backgroundColor: "#59c896" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
