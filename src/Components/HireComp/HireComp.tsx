import React from "react";
import "./HireComp.scss";

 const HireComp = () => {
  return (
    <>
      <section className="hire">
        <div className="hire-cont">
          <h1 className="hire-cont_title">Hire Me</h1>
          <p className="hire-cont_para">
            I am a Fullstack Engineer with experience in building both the user
            interface and the serverside of an application from the scratch. I
            have worked on several complex projects that are live,some of the
            projects are displayed in the project section, you can click on the
            images to view the live projects. I worked on several areas of an
            application that requires in depth knowledge of the my stack, areas
            like creating Rest web api,improving the performance of web api(using in-memory caching, optimizing database queries,using DTOs to transfer required data etc),handling application security (authetication, authorisation, CORS,CSP) both on serverside and view side of the source code, integrating third party library like
            googleApi, converting figma design to code,consuming API from the backend,handling errors on frontend and backend,creating middlewares to intercept request before hitting the server, creating custom reusable component.
          </p>
        </div>
      </section>
    </>
  );
};
export default HireComp;