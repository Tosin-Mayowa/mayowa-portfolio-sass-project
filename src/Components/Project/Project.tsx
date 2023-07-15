import React from "react";
import port from "../../Assets/portf.jpg"
import redux from "../../Assets/redux.jpg";
import cart from "../../Assets/cart.jpg";
import form from "../../Assets/form.jpg";
import sharp from "../../Assets/Sharp.jpg";
import regix from "../../Assets/regix-1.jpg"
import sendrail from "../../Assets/sendrail.jpg";
import './Project.scss'
// import port from "../../Assets/";
const Project=()=>{

    return (
      <>
        <section id="work">
          <div className="work_card">
            <a href="https://sendrail-web-dev.onrender.com" target="_blank">
              <img src={sendrail} alt="" />
            </a>
          </div>
          <div className="work_card">
            <a href="https://regix-rzay.vercel.app/" target="_blank">
              <img src={regix} alt="" />
            </a>
          </div>
          <div className="work_card">
            <a href="https://shopping-cart-psi-ten.vercel.app/" target="_blank">
              <img src={cart} alt="" />
            </a>
          </div>
          <div className="work_card">
            <a
              href="https://github.com/Tosin-Mayowa/sharpsharp-ecomm"
              target="_blank"
            >
              <img src={sharp} alt="" />
            </a>
          </div>
        </section>
      </>
    );
}

export default Project;