import React,{useState} from 'react'
import './Header.scss'
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
                <a href="#">Home</a>
              </li>
              <li className={isClicked ? "fade" : ""}>
                <a href="#">About</a>
              </li>
              <li className={isClicked ? "fade" : ""}>
                <a href="#">Project</a>
              </li>
              <li className={isClicked ? "fade" : ""}>
                <a href="#">Services</a>
              </li>
              <li className={isClicked ? "fade" : ""}>
                <a href="#">Hire me</a>
              </li>
              <li className={isClicked ? "fade" : ""}>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
}