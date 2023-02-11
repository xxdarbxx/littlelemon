import React, { useState} from 'react';
import "../components/styles/Header.css"
import Logo from "../components/assets/Logo.svg"
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header-container">
        <NavLink to = "/">
            {/* <img src = { Logo } alt = "Little Lemon logo" />*/}
            {<object className="logo-img" data = { Logo } type="image/svg+xml" />}
        </NavLink>
        <nav>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="#">About</NavLink></li>
                <li><NavLink to="#">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="#">Order Online</NavLink></li>
                <li><NavLink to="#">Login</NavLink></li>
            </ul>
        </nav>
        <div className="hamburger" onClick = {handleClick}>
            {click ? (<AiOutlineClose size={50} style={{ color: "#333333"}}/>) : (<AiOutlineMenu size={50} style={{ color: "#333333"}}/>)}  
        </div>
      </header>
    </>
  )
}

export default Header