import React, { useEffect } from 'react'
import "./styles/timeline.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Section5() {
    useEffect(()=>{
        var t1 = gsap.timeline({scrollTrigger:{trigger: "#timeline-section h5", start:"0 80%",end: "0px 80%", toggleActions: "restart none reset reverse"}});
        t1.fromTo("#timeline-section h5, #timeline-section h2", {x: -200, opacity:0}, {x:40, opacity: 1, duration: .6, });
        t1.to("#timeline-section h5, #timeline-section h2", {x:0, duration: .3});
    
    }, []);
  return (
    <div id='timeline-section'>
        <h5>This is a subtitle</h5>
        <h2>The Timeline Title</h2>
        <div id="timeline">
        <div id="timeline-content">
    
    <div className="timeline-item">
        <h6>This is an event</h6>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit voluptate ratione iusto consequuntur blanditiis nostrum rem architecto delectus.</span>
    </div>
    <div className="timeline-item">
        <h6>This is an event</h6>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit voluptate ratione iusto consequuntur blanditiis nostrum rem architecto delectus.</span>
    </div>
    <div className="timeline-item">
        <h6>This is an event</h6>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit voluptate ratione iusto consequuntur blanditiis nostrum rem architecto delectus.</span>
    </div>
    <div className="timeline-item">
        <h6>This is an event</h6>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit voluptate ratione iusto consequuntur blanditiis nostrum rem architecto delectus.</span>
    </div>
    <div className="timeline-item">
        <h6>This is an event</h6>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit voluptate ratione iusto consequuntur blanditiis nostrum rem architecto delectus.</span>
    </div>
    <div className="timeline-item">
        <h6>This is an event</h6>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit voluptate ratione iusto consequuntur blanditiis nostrum rem architecto delectus.</span>
    </div>
    <div className="timeline-item">
        <h6>This is an event</h6>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit voluptate ratione iusto consequuntur blanditiis nostrum rem architecto delectus.</span>
    </div>
</div>   
        </div>

    </div>
  )
}
