import React from 'react'
import "./styles/section7.css"

export default function Section7() {
  return (
    <div id='section7'>
        <h5>This a some kind of a subtitle</h5>
        <h2>But this is a title!</h2>
        <div id="procedure-chart">
            <div className="procedure-step" data-text="This is the step 1"><span>1</span></div>
            <div className="procedure-step" data-text="This is the step 2. It comes after step 1"><span>2</span></div>
            <div className="procedure-step" data-text="This is the step 3, the last one!"><span>3</span></div>
        </div>
        <div id="path-chart">
            <div id="path-line">
                <div className="path-item" data-text="You" style={{backgroundColor: "#6241eb"}}></div>
                <div className="path-item" data-text="Anonymous 1" style={{backgroundColor: "#41c2fc"}}></div>
                <div className="path-item" data-text="Anonymouse 2" style={{backgroundColor: "#ffb53a"}}></div>
                <div className="path-item" data-text="Anonymouse 3" style={{backgroundColor: "#59c896"}}></div>
            </div>
        </div>
    </div>
  )
}
