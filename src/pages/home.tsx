import React from 'react';
import withLayout from '../withLayout';
import HomeComp from '../Components/Home/HomeComp';
import Project from '../Components/Project/Project';
const Home=()=>{

    return(
        <>
<HomeComp/>
<Project/>
        </>
    )
}

export default withLayout(Home);