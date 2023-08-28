import React from 'react'
import "./styles/section9.css";
import happyblob from "./images/happyblob.png"

export default function Section9() {

    const cardListData = [
        {
            "title": "Power through, even when the going gets tough",
            "text": "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc"
        },
        {
            "title": "Learn more about who you are and where you want to go",
            "text": "We ask the right questions to help you better understand why you do things the way you do."
        },
        {
            "title": "Play and grow together with others on the same journey",
            "text": "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!"
        },
        {
            "title": "Master how to make it happen in real life",
            "text": "We support you towards ninja-level skills with sleek tools such as dry-runs, quizzes, and flashcards."
        },
        {
            "title": "Learn about practical skills that you can actually use in real life",
            "text": "We teach you smart psychological techniques and habit-forming strategies that are easy to apply."
        },
        {
            "title": "Get support that's made for your needs",
            "text": "We build your personal roadmap of lessons and actions towards your goals."
        }
        
    ]


  return (
    <div id='section9'>
        <div id='sec9-title'>
            <h2>Work with us</h2>
            <h2>ahead</h2>
        </div>

        <div id="sec9-content">
            <div id="sec9-info">
                <div id="sec9-about">
                    <img src={happyblob} alt="" />
                    <h5>About</h5>
                    <span>At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</span>
                </div>
                <div id="sec9-product">
                    <h5>Product</h5>
                    <span>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</span>
                </div>
            </div>
            <div id="sec9-scroll">

                {cardListData && cardListData.map((card, i) => {
                    return (
                        <div key={i} className="sec9-scroll-item">
                            <h6>{card.title}</h6>
                            <span>{card.text}</span>
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}
