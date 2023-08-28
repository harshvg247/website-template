// Open vacancies
import { useEffect } from "react";
import dot from "../images/dot.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section10 = () => {
    
    useEffect(()=>{
        var t1 = gsap.timeline({
            scrollTrigger: {
              trigger: "#section10 h2",
              start: "0 80%",
              end: "0px 80%",
              toggleActions: "restart none reset reverse",
            },
          });
          t1.fromTo(
            "#section10 h2",
            { x: -200, opacity: 0, fontSize: 0 },
            { x: 40, opacity: 1, duration: 0.6, fontSize: "3rem" }
          );
          t1.to("#section10 h2", { x: 0, duration: 0.3 });
    }, []);

  return (
    <div id="section10">
      <h2>Open vacancies</h2>
      <div className="cards">
        <div className="card">
          <h3>Senior Full-Stack Engineer</h3>
          <div className="card-line">
            <img src={dot} alt="" />
            <p>Full-time position</p>
          </div>
          <div className="card-line">
            <img src={dot} alt="" />
            <p>Berlin or remote</p>
          </div>
          <div className="card-line">
            <img src={dot} alt="" />
            <p>$40-50K, 0.5-1.5% equity share options</p>
          </div>
          <button>Know more</button>
        </div>
        <div className="card">
          <h3>Senior Full-Stack Engineer</h3>
          <div className="card-line">
            <img src={dot} alt="" />
            <p>Full-time position</p>
          </div>
          <div className="card-line">
            <img src={dot} alt="" />
            <p>Berlin or remote</p>
          </div>
          <div className="card-line">
            <img src={dot} alt="" />
            <p>$40-50K, 0.5-1.5% equity share options</p>
          </div>
          <button>Know more</button>
        </div>

        <div className="card">
          <h3>Senior Full-Stack Engineer</h3>
          <div className="card-line">
            <img src={dot} alt="" />
            <p>Full-time position</p>
          </div>
          <div className="card-line">
            <img src={dot} alt="" />
            <p>Berlin or remote</p>
          </div>
          <div className="card-line">
            <img src={dot} alt="" />
            <p>$40-50K, 0.5-1.5% equity share options</p>
          </div>
          <button>Know more</button>
        </div>
      </div>
    </div>
  );
};

export default Section10;
