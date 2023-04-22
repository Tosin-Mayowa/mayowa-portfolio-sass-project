import React from "react";
import port from "../../Assets/portf.jpg"
import redux from "../../Assets/redux.jpg";
import cart from "../../Assets/cart.jpg";
import form from "../../Assets/form.jpg";
import sharp from "../../Assets/Sharp.jpg";
import './Project.scss'
// import port from "../../Assets/";
const Project=()=>{

    return (
      <>
        <section id="work">
          <div className="work_card">
            <img src={port} alt="" />
          </div>
          <div className="work_card">
            <img src={cart} alt="" />
          </div>
          <div className="work_card">
            <img src={form} alt="" />
          </div>
          <div className="work_card">
            <img src={sharp} alt="" />
          </div>
          <div className="work_card">
            <img src={port} alt="" />
          </div>
          <div className="work_card">
            <img src={port} alt="" />
          </div>
        </section>
      </>
    );
}

export default Project;