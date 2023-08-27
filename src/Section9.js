import React from 'react'
import "./styles/section9.css";
import happyblob from "./images/happyblob.png"

export default function Section9() {
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
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aspernatur ducimus, amet enim optio possimus! Sint unde vero facere consequuntur? Eveniet fugiat tempora eum incidunt? Enim officia quaerat dignissimos atque.</span>
                </div>
                <div id="sec9-product">
                    <h5>Product</h5>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aspernatur ducimus, amet enim optio possimus! Sint unde vero facere consequuntur? Eveniet fugiat tempora eum incidunt? Enim officia quaerat dignissimos atque.</span>
                </div>
            </div>
            <div id="sec9-scroll">
            <div className="sec9-scroll-item">
                    <h6>This is a something that I don't have a name for</h6>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo asperiores molestias ab quod maiores possimus sed commodi illo quasi eos.</span>
                </div>
                <div className="sec9-scroll-item">
                    <h6>This is a something that I don't have a name for again</h6>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo asperiores molestias ab quod maiores possimus sed commodi illo quasi eos.</span>
                </div>
                <div className="sec9-scroll-item">
                    <h6>This is a something that I don't have a name for again</h6>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo asperiores molestias ab quod maiores possimus sed commodi illo quasi eos.</span>
                </div>
                <div className="sec9-scroll-item">
                    <h6>This is a something that I don't have a name for again</h6>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo asperiores molestias ab quod maiores possimus sed commodi illo quasi eos.</span>
                </div>
                <div className="sec9-scroll-item">
                    <h6>This is a something that I don't have a name for again</h6>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo asperiores molestias ab quod maiores possimus sed commodi illo quasi eos.</span>
                </div>

            </div>
        </div>

    </div>
  )
}
