import React from "react";
import port from "../../Assets/portf.jpg"
import redux from "../../Assets/redux.jpg";
import cart from "../../Assets/cart.jpg";
import form from "../../Assets/form.jpg";
import sharp from "../../Assets/Sharp.jpg";
import regix from "../../Assets/regix-1.jpg"
import sendrail from "../../Assets/sendrail.jpg";
import Quiz from "../../Assets/Quizima.png"
import dashboard from "../../Assets/forbe.png"
import './Project.scss'
// import port from "../../Assets/";
const Project=()=>{

    return (
      <>
        <section id="work">
        <div className="work_card">
            <a href="https://i-digix-quiz.vercel.app/" target="_blank">
              <img src={Quiz} alt="" />
            </a>
          </div>
        <div className="work_card">
            <a href="https://forbework-app-nkyd.vercel.app/dashboard" target="_blank">
              <img src={dashboard} alt="" />
            </a>
          </div>
        <div className="work_card">
            <a href="https://regix-rzay.vercel.app/" target="_blank">
              <img src={regix} alt="" />
            </a>
          </div>
          <div className="work_card">
            <a href="https://github.com/Tosin-Mayowa/sendrail" target="_blank">
              <img src={sendrail} alt="" />
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