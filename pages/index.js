import React from 'react'
import { WakaTimeClient, RANGE } from 'wakatime-client';
import {Navbar} from '../components/Navbar'
import {HeaderSection} from '../components/HeaderSection'
import {MainContainer} from '../components/MainContainer'


const Index = (props) => {
    console.log({props})
    return(
        <>
        <Navbar />
        <HeaderSection />
        <MainContainer />
        </>
    )
}

export default Index;

