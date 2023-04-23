import React,{useState} from 'react'
import './Header.scss'
import { Link } from "react-router-dom";
export const Header=()=>{
const [isClicked,setIsClicked]=useState(false)
    return (
      <>
        <header className="header">
          <nav className={isClicked ? "clicked" : "header__nav"}>
            {/* hamburger/menu bar */}
            <div
              className="header__nav-hamburger"
              onClick={() => setIsClicked(!isClicked)}
            >
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
            {/* end hamburger/menu bar */}

            <ul className="header__nav-links">
              <li className={isClicked ? "fade" : ""}>
                <Link to="/">
                  {" "}
                  <a>Home</a>
                </Link>
              </li>
              <li className={isClicked ? "fade" : ""}>
                <Link to="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className={isClicked ? "fade" : ""}>
                <Link to="/project">
                  <a>Project</a>
                </Link>
              </li>
              <li className={isClicked ? "fade" : ""}>
                <Link to="/services"></Link>
                <a href="#">Services</a>
              </li>
              <li className={isClicked ? "fade" : ""}>
                <Link to="/hire">
                  <a>Hire me</a>
                </Link>
              </li>
              <li className={isClicked ? "fade" : ""}>
                <Link to="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
}