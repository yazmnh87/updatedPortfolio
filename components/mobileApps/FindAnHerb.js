import React from 'react'
import styled from 'styled-components'

import {
    BreakpointMobile,
    BreakpointDesktop,
    BreakpointLargeDevices,
    BreakpointTablet,
    BreakpointSmallMobile,
  } from '../GlobalStyle'
const Container = styled.div`
/* height:100%;
 */
 flex: 1;
width:100%;
/* border:1px solid red; */
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: 40% 60%;
/* border:1px solid blue; */
@media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    grid-template-columns: 1fr;
}
`

const ImageContainer = styled.div`
display: flex;
`

const StyledImg = styled.img`
height: 150px;
padding: 10px;
/* border:1px solid red; */
@media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    margin: 0 auto;
}
`

const Title = styled.h2`
font-size: 22px;
width:100%;
/* border:1px solid red; */
`

const DescriptionContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
/* border:1px solid lime; */
`

const DescriptionText = styled.p`
font-size: 2rem;
/* border:1px solid purple; */
@media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    font-size: 1.4rem;
}
`

const LogoContainer = styled.div`
position: absolute;
bottom: 0;
display: flex;
width:100%;
/* border:1px solid purple; */
`

const StyledLogo = styled.img`
bottom:0;
left: 20px;
height: 50px;
`

export const FindAnHerbApp = (props) => {
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                <StyledImg src={'findAnHerb_initial.png'}/>
                <StyledImg src={'findAnHerb_landing.png'}/>
                </ImageContainer>
                <Title>Find An Herb</Title>
            </Wrapper>
            <DescriptionContainer>
                <DescriptionText>FindAnHerb App is a React Native app that compliments my website <a href="https://www.findanherb.com/" target="_blank">FindAnHerb.com</a>.  FindAnHerb app is currently available on TestFlight for IOS.  Request Access to demo.</DescriptionText>
            </DescriptionContainer>
                <LogoContainer>
                <StyledLogo src={'react_logo.png'}/>
                </LogoContainer>
        </Container>
    )
}