import logo from "./images/person.png";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt="" className="navbarLogo"/>
            <ul>
                <li>Emotioms</li>
                <li>Manifesto</li>
                <li>Self-awareness</li>
                <li>Work with us</li>
            </ul>
            <button className="navbarButton">Download app</button>
        </nav>
     );
}
 
export default Navbar;