import React from 'react';
import mayowa from "../../Assets/mayowa.jpg"; 
import './About.scss';
const About=()=>{

    return (
      <>
        <section className="about__me">
          <div className="about__me-img">
            <img src={mayowa} alt="mayowa" />
          </div>
          <div className="about__me-content">
            <h2 className="about__me-content--title">About me</h2>
            <p className="about__me-content--para">
              Fullstack Engineer with experience in building solutions to solve
              real life problems. Design, build and implement the user interface and Server side
              systems of web based applications achieving a satisfactory user
              experience with no issues, errors or downtime, using, NodeJs,Express, C#,ASP.NET CORE(WEB API,RAZOR PAGE,MVC),MS SQL SERVER,SSMS, React.js,
              Next.js,Typescript,Redux ,React Testing Library and Jest, Git, GIT
              CI/CD, Chakra-Ui, React-Table,Nestjs. I have experience working in an
              Agile environment using tools like Jira and Slack. I also have
              skills when it comes to leading and managing team and people, an
              experience I gathered during my 10years in teaching.I graduated
              at the top of my class with Distinction. As a good Mathematics
              student, I love solving complex problems, When it comes to web
              page functionality and design, I am your guy.
            </p>
            <a href="" className="about__me-content--link">
                Read more
            </a>
          </div>
        </section>
      </>
    );
}

export default About;