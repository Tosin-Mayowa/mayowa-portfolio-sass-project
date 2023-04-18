import React from 'react';
import './Layout.scss';
import Logo from "../../Assets/newLogo.png";
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import {FaPinterest} from "react-icons/fa";
import {Navbar} from "./Navbar/Navbar"
const Layout=({children})=>{

    return (
      <>
        <div id="container">
          {/* side navbar */}
          <div className="side-nav">
            <div className="side-nav__content">
              <div className="side-nav__content-logo">
                <img src={Logo} alt="Mayowa" />
              </div>
              <ul className="side-nav__content-social">
                <a href="#" className="side-nav__content-social__link-1">
                  <BsLinkedin className="icon-1" />
                </a>
                <a href="#" className="side-nav__content-social__link-2">
                  {" "}
                  <BsGithub className="icon-2" />
                </a>
                <a href="#" className="side-nav__content-social__link-3">
                  {" "}
                  <CiTwitter className="icon-3" />
                </a>
                <a href="#" className="side-nav__content-social__link-4">
                  <FaPinterest className="icon-4" />
                </a>
                <a href="#" className="side-nav__content-social__link-5">
                  {" "}
                  <BsFacebook className="icon-5" />
                </a>
                <a href="#" className="side-nav__content-social__link-6">
                  <BsInstagram className="icon-6" />
                </a>
              </ul>
            </div>
          </div>
          {/* end of side navbar  */}
          {/* main content goes here */}
          <div className="main">
            <Navbar />
            {children}
          </div>
        </div>
      </>
    );
}

export default Layout;