import { useEffect, useState } from "react";
import emoji from "./images/emoji.png";
import backArrow from "./images/left-arrow.png";
import frontArrow from "./images/right-arrow.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Section3 = () => {

    const cards = [{title: "You argue with colleague1", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.", icon: emoji}, {title: "You argue with colleague2", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.", icon: emoji}, {title: "You argue with colleague3", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.", icon: emoji}, {title: "You argue with colleague3", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.", icon: emoji}, {title: "You argue with colleague5", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.", icon: emoji}, {title: "You argue with colleague6", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.", icon: emoji}, {title: "You argue with colleague7", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.", icon: emoji},{title: "You argue with colleague8", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.", icon: emoji}, {title: "You argue with colleague9", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, pariatur.", icon: emoji},];

    useEffect(()=>{
        let scrollContainer = document.querySelector(".cards");
        let backBtn = document.querySelector(".backbtn");
        let frontBtn = document.querySelector(".frontbtn");
        scrollContainer.addEventListener("wheel", (evt)=>{
            evt.preventDefault();
            scrollContainer.scrollLeft += 3*evt.deltaY;
        })
        backBtn.addEventListener("click", ()=>{
            scrollContainer.scrollLeft -= 516;
            scrollContainer.style.scrollBehaviour = "smooth";
        })
        frontBtn.addEventListener("click", ()=>{
            scrollContainer.scrollLeft += 516;
            scrollContainer.style.scrollBehaviour = "smooth";
        })

        gsap.fromTo(
            ".card",
            { yPercent: 20, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1, scrollTrigger: {
                trigger: ".card",
                //start: "top center",
                // markers: true,
                ///start: "20px 80%",//when elemetn reaches 20px above 80% line from top
             toggleActions: "restart none none none"
            } }
          );
    }, [])

    return ( 
        <div id="section3">
            <h2>Does this sound familiar...</h2>
            <div className="gallery">
            <div className="backbtn"><img src={backArrow} alt="" /></div>
            <div className="cards">
            {cards.map((card)=>(
                <div className="card">
                    <img src={card.icon} alt="" />
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                </div>
            ))}
            </div>
            <div className="frontbtn"><img src={frontArrow} alt="" /></div>
            </div>
        </div>
     );
}
 
export default Section3;