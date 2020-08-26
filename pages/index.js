import React from 'react'
import styled from 'styled-components'
import {Navbar} from '../components/Navbar'
import {HeaderSection} from '../components/HeaderSection'
import {MainContainer} from '../components/MainContainer'

const Container = styled.div`
height: 100vh;
/* overflow: scroll; */
`

const Index = () => {
    return(
        <>
        <Navbar />
        <HeaderSection />
        <MainContainer />
        </>
    )
}

export default Index;