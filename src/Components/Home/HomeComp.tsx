import React from "react";
import "./Home.scss";
const HomeComp = () => {
  return (
    <>
      <section id="home">
        <div className="home__content">
          <h1 className="home__content-title">Mayowa Tosin Adejumola</h1>
          <p className="home__content-para">.NET Engineer(C#,ASP.NET CORE,REACT)</p>
          <a
            
            href="https://github.com/Tosin-Mayowa/Fina-Project"
            className="home__content-link"
          >
            My Project
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeComp;
