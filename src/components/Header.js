import {LOGO_URL} from "../utils/constants";
import navLogo from "../images/logo.png";
import { useState} from "react";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import useOnlineStatus from "../utils/useOnlineStatus";
const Header =() =>{
const [btnNameReact,setBtnNameReact] = useState("Login");
const [menuOpen, setMenuOpen] = useState(false);
console.log("Header render")

const onlineStatus =  useOnlineStatus();
const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

// useEffect(()=>{
//     console.log("0u0seEffect")
// },[btnNameReact]);
    return(
            <div className="flex justify-between items-center bg-amber-50 sticky md: top-0 p-4">
              <div className="logo-container">
                <img className="w-24" src={navLogo} alt="navLogo" />
              </div>
              <div className="hidden lg:flex items-center">
                <ul className="flex font-semibold">
                  <li className="px-4">
                    Online Status: {onlineStatus ? "☑️" : "⛔"}
                    
                  </li>
                  <li className="px-4">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="px-4">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                  </li>
                  <li className="px-4">Cart</li>
                  <button className="px-4" onClick={() => {
                    setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                  }}>
                    {btnNameReact}
                  </button>
                </ul>
              </div>
              <div className='lg:hidden'>
                <FaBars onClick={toggleMenu} />
              </div>
              {menuOpen && (
                <div className="lg:hidden bg-amber-50 w-full absolute top-10 my-14 left-0">
                  <ul className="flex flex-col items-center font-semibold p-4">
                    <li className="py-2">
                      Online Status: {onlineStatus ? "☑️" : "⛔"}
                    </li>
                    <li className="py-2">
                      <Link to="/" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/about" onClick={toggleMenu}>About Us</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
                    </li>
                    <li className="py-2">
                      <Link to="/grocery" onClick={toggleMenu}>Grocery</Link>
                    </li>
                    <li className="py-2">Cart</li>
                    <button className="py-2" onClick={() => {
                      setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                      toggleMenu();
                    }}>
                      {btnNameReact}
                    </button>
                  </ul>
                </div>
              )}
            </div>
          );
}

export default Header;
