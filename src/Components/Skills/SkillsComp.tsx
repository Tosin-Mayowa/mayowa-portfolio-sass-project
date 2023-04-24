import React from 'react';
import { FaReact, FaSass,FaHtml5,FaGit } from "react-icons/fa";
import { SiTypescript,SiRedux } from "react-icons/si";
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
        <div className="skill skills__content-2">
          <SiTypescript className="skill-icon" />
          <h3 className="skill-title skills__content-2--title">Typescrpt</h3>
          <p className="skill-para skills__content-2--para">
            I am a lover of typescript, using typescript with react makes life
            easier and removes error
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
            This is the foundation of frontend, I am an exprience html user
          </p>
        </div>
        <div className="skill skills__content-5">
          <SiRedux className="skill-icon" />
          <h3 className="skill-title skills__content-5--title">Redux</h3>
          <p className="skill-para skills__content-5--para">
            Highly experience in the use of redux, talking about lifting state
            out of component tree, best framewrk to use is Redux.
          </p>
        </div>
        <div className="skill skills__content-6">
          <FaGit className="skill-icon" />
          <h3 className="skill-title skills__content-6--title">Git</h3>
          <p className="skill-para skills__content-6--para">
            This is what makes me a real developer, ability to work with team
            without conflict
          </p>
        </div>
      </section>
    </>
  );
};
export default SkillsComp;