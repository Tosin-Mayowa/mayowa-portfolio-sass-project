import React from "react";
import mayowa from "../../Assets/mayowa.jpg";
import "./About.scss";
const About = () => {
  return (
    <>
      <section className="about__me">
        <div className="about__me-img">
          <img src={mayowa} alt="mayowa" />
        </div>
        <div className="about__me-content">
          <h2 className="about__me-content--title">About me</h2>
          <p className="about__me-content--para">
            I am a versatile Full-Stack Engineer with a strong foundation in
            frontend development, a passion for building scalable digital
            solutions, and a proven track record of quickly adapting to new
            technologies and leading high-impact projects across fintech,
            edtech, logistics, and enterprise environments. From transforming
            Figma designs into pixel-perfect, responsive user interfaces using
            React.js, Next.js, TypeScript, and Tailwind CSS, to diving deep into
            C# and ASP.NET to deliver enterprise-grade banking solutions, I
            thrive at the intersection of clean design, performance
            optimization, and business impact. I have led engineering teams,
            collaborated cross-functionally with designers and backend
            developers, and worked directly with stakeholders to deliver robust
            features that are currently live in production—empowering
            decision-makers in finance, education, and logistics. Whether it is
            integrating role-based authentication, connecting to Active
            Directory, exporting dynamic Excel reports, or implementing
            creditworthiness scorecards, I bring clarity, ownership, and
            execution to every project.
          </p>
          <a href="#" className="about__me-content--link">
            Read more
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
