import React from 'react';
import { FaReact, FaSass,FaHtml5,FaGit, FaNodeJs,FaNode,FaCss3Alt } from "react-icons/fa";
import { SiTypescript,SiRedux } from "react-icons/si";
import {GrGraphQl} from "react-icons/gr";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import './Skills.scss';
const SkillsComp= () => {
  return (
    <>
      <section className="skills">
      <div className="skill skills__content-1">
          <FaReact className="skill-icon" />
          <h3 className="skill-title skills__content-1--title">React</h3>
          <p className="skill-para skills__content-1--para">
            I am an an experience React developer, I have been opprtune to build
            loan app,logistic apps with React and its frame work
          </p>
        </div>
        <div className="skill skills__content-6">
          <FaReact className="skill-icon" />
          <h3 className="skill-title skills__content-6--title">Nextjs</h3>
          <p className="skill-para skills__content-6--para">
            This is a react framework which I use in building fullstack app.
          </p>
        </div>
        <div className="skill skills__content-2">
          <SiTypescript className="skill-icon" />
          <h3 className="skill-title skills__content-2--title">Typescrpt</h3>
          <p className="skill-para skills__content-2--para">
            I am a lover of typescript, using typescript with react makes life
            easier and removes error
          </p>
        </div>
        <div className="skill skills__content-5">
          <IoLogoJavascript className="skill-icon" />
          <h3 className="skill-title skills__content-5--title">Javascript</h3>
          <p className="skill-para skills__content-5--para">
            Highly experience in writting Javascript, this is the language use in react and also node.js. My proficiency level in 
            writing this high level scripting language used in both client and server side code is very high.
          </p>
        </div>
        <div className="skill skills__content-5">
          <FaCss3Alt className="skill-icon" />
          <h3 className="skill-title skills__content-5--title">CSS3</h3>
          <p className="skill-para skills__content-5--para">
            I have deep understanding of CSS and I can write CSS to build things that mostly many can only build using CSS library. I have trained myself to realy understand how the CSS work underneath the hood, understand the properties and how I can combine it with html or tsx elements to come up with a great UI.
            </p>
        </div>
      <div className="skill skills__content-6">
          <FaNodeJs className="skill-icon" />
          <h3 className="skill-title skills__content-6--title">Expressjs</h3>
          <p className="skill-para skills__content-6--para">
            This is also a Nodejs framework, which I also use in building the
            server side of my application
          </p>
        </div>
        <div className="skill skills__content-6">
          <TbBrandCSharp className="skill-icon" />
          <h3 className="skill-title skills__content-6--title">C#</h3>
          <p className="skill-para skills__content-6--para">
            C# is statically typed programming Language which I use on the
            backend to build applications
          </p>
        </div>
        <div className="skill skills__content-6">
          <TbBrandCSharp className="skill-icon" />
          <h3 className="skill-title skills__content-6--title">
            ASP.NET CORE WEB API
          </h3>
          <p className="skill-para skills__content-6--para">
            ASP.NET CORE WEB API is a cross platform C# framework I used in creating Rest Api for 
            web applications
          </p>
        </div>
        <div className="skill skills__content-6">
          <TbBrandCSharp className="skill-icon" />
          <h3 className="skill-title skills__content-6--title">
            ASP.NET CORE Razor Page
          </h3>
          <p className="skill-para skills__content-6--para">
            ASP.NET CORE Razor Page is a cross platform C# framework I used in
             fullstack web applications
          </p>
        </div>
        <div className="skill skills__content-6">
          <TbBrandCSharp className="skill-icon" />
          <h3 className="skill-title skills__content-6--title">
            ASP.NET CORE MVC
          </h3>
          <p className="skill-para skills__content-6--para">
            ASP.NET CORE MVC is a cross platform C# framework I used in building fullstack
            web applications
          </p>
        </div>
        
     
        <div className="skill skills__content-3">
          <FaSass className="skill-icon" />
          <h3 className="skill-title skills__content-3--title">Sass</h3>
          <p className="skill-para skills__content-3--para">
            Sass is powerful it helps maintain DRY principle reason I love it
            and prefer it
          </p>
        </div>
        <div className="skill skills__content-4">
          <FaHtml5 className="skill-icon" />
          <h3 className="skill-title skills__content-4--title">HTML5</h3>
          <p className="skill-para skills__content-4--para">
            This is the foundation of frontend, I am an exprience html user, I
            have been using html5 for many years now.
          </p>
        </div>
        <div className="skill skills__content-5">
          <SiRedux className="skill-icon" />
          <h3 className="skill-title skills__content-5--title">Javascript</h3>
          <p className="skill-para skills__content-5--para">
            Highly experience in writting Javascript, this is the language use in react and also node.js. My proficiency level in 
            writing this high level scripting language used in both client and server side code is very high.
          </p>
        </div>
{/* 
        <div className="skill skills__content-6">
          <FaNode className="skill-icon" />
          <h3 className="skill-title skills__content-6--title">Nestjs</h3>
          <p className="skill-para skills__content-6--para">
            This is the framework for nodejs, I use it to handle the server for
            my frontend application,my proficiency level is high.
          </p>
        </div> */}
        {/* <div className="skill skills__content-6">
          <FaNodeJs className="skill-icon" />
          <h3 className="skill-title skills__content-6--title">Expressjs</h3>
          <p className="skill-para skills__content-6--para">
            This is also a Nodejs framework, which I also use in building the
            server side of my application
          </p>
        </div> */}
  
        <div className="skill skills__content-6">
          <GrGraphQl className="skill-icon" />
          <h3 className="skill-title skills__content-6--title">GraphQL</h3>
          <p className="skill-para skills__content-6--para">
            I use graphql apollo client to handle the Graphql API, connecting
            react to Graphql server
          </p>
        </div>
      </section>
    </>
  );
};
export default SkillsComp;