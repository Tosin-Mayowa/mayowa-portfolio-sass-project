import React from 'react';
import withLayout from '../withLayout';
import HomeComp from '../Components/Home/HomeComp';
import Project from '../Components/Project/Project';
import About from '../Components/About/About';
import SkillsComp from '../Components/Skills/SkillsComp';
const Home=()=>{

    return(
        <>
<HomeComp/>
<Project/>
<About/>
<SkillsComp/>
        </>
    )
}

export default withLayout(Home);