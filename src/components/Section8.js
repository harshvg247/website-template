import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// before you get started
const Section8 = () => {

    useEffect(()=>{
        const lines = document.querySelectorAll(".line");
        for(let i=0;i<lines.length;i++){
            let t1 = gsap.timeline({
                scrollTrigger: {
                  trigger: lines[i],
                  start: "0 80%",
                  end: "0px 80%",
                  toggleActions: "restart none reset reverse",
                },
              });
              t1.fromTo(
                lines[i],
                { y: -50, opacity: 0 },
                { y: 10, opacity: 1, duration: 0.6 }
              );
              t1.to(lines[i], { y: 0, duration: 0.3 });
        
        }
        
    }, []);

    return ( 
        <div id="section8">
            <h5 className="line">We take privacy seriously</h5>
            <h2 className="line">Before you get started</h2>
            <p className="line">"We won't share your answers with anyone (and wont't ever tell you which friends said what about you)"</p>
            <div className="signature-line line"><p>with love, </p><p className="signature">Team ahead</p></div>
            <div className="button-div line">
                <button >Take a test</button>
                <p>Takes only 5 minutes</p>
            </div>
        </div>
     );
}
 
export default Section8;