import React from 'react';
import withLayout from '../withLayout';
import HomeComp from '../Components/Home/HomeComp';
import Project from '../Components/Project/Project';
import About from '../Components/About/About';
import SkillsComp from '../Components/Skills/SkillsComp';
import HireMe  from '../Components/HireComp/HireComp';
import ContactComp  from '../Components/Contact/ContactComp';
import HireComp from '../Components/HireComp/HireComp';
const Home=()=>{

    return(
        <>
<HomeComp/>
<Project/>
<About/>
<SkillsComp/>
<HireComp/>
<ContactComp/>
        </>
    )
}

export default withLayout(Home);