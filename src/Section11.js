//footer
import appleLogo from "./images/appleLogo.png";
import logo from "./images/companyLogo.png"; 
import email from "./images/email.png";
import location from "./images/location.png";
import copyright from "./images/copyright.png";
const Section11 = () => {
    return ( 
        <div id="section11">
            <div className="logo">
                <img src={logo} alt="" />
                <h3>ahead</h3>
            </div>
            <div className="contact-details">
                <div className="address"><img src={location} alt="" /><p>Augustraba 26, 10117 Berlin</p></div>
                <div className="email"><img src={email} alt="" /><p>hasd@ahead-app.com</p></div>
            </div>
            <button className="appStoreButton">
              <img src={appleLogo} alt="" className="appleLogo" />
              <section className="appStoreButtonText">
                <p className="logoTitle">Download on the</p>
                <p className="logoSubtitle">App Store</p>
              </section>
            </button>
            <div className="copyright"><img src={copyright} alt="" />2022 Ahead app. All rights reserved</div>
        </div>
     );
}
 
export default Section11;