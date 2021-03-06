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
/* border:1px solid blue; */
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: 40% 60%;
/* border:1px solid red; */
@media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    grid-template-columns: 1fr;
}
`

const ImageContainer = styled.div`
display: flex;
`

const StyledImg = styled.img`
height: 120px;
padding: 10px;
/* border:1px solid red; */
@media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    margin: 0 auto;
}
`

const Title = styled.h2`
font-size: 2.2rem;
width:100%;
color: ${props=> props.theme.colors.primary};
/* border:1px solid red; */
`

const DescriptionContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
/* border:1px solid red; */
`

const DescriptionText = styled.p`
font-size: 1.8rem;
/* border:1px solid red; */
.googlePlayLink{
text-decoration: underline;
color: ${props=> props.theme.colors.secondary}; 
}

.googlePlayLink:hover{
    cursor: pointer;
}
@media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    font-size: 1.4rem;
}

`

const LogoContainer = styled.div`
display: flex;
position: absolute;
bottom: 0;
height: 50px;
width:100%;
/* border:1px solid red; */
`

const StyledLogo = styled.img`
/* position:absolute; */
height: 5rem;
padding-left: 5px;
padding-bottom: 5px;
`

export const Wild5App = (props) => {
    return (
        <Container>
            <Wrapper>
                <ImageContainer>

                <StyledImg src={'wild5_login_new.png'}/>
                <StyledImg src={'wild5_landing.png'}/>
                </ImageContainer>
                <Title>Wild5 Wellness IOS & Android App</Title>
            </Wrapper>
            <DescriptionContainer>
                <DescriptionText>Wild 5 Wellness Kickstart 30 app is a full stack React Native app available on both IOS and android. The app is a compliment tool to the book to assist readers to be able to track their progress more easily. Check out the <a href="https://play.google.com/store/apps/details?id=com.wild5wellness.kickstart30" className="googlePlayLink" target="_blank">App</a>
    {" "}and also take a look at the <a href="https://www.amazon.com/WILD-Wellness-KickStart30-Proven-Program/dp/1791658806" className="googlePlayLink" target="_blank">Book</a>.
                </DescriptionText>
                <LogoContainer>
                <StyledLogo src={'react_logo.png'}/>
                <StyledLogo src={'firebase_logo.png'}/>
                </LogoContainer>
            </DescriptionContainer>
        </Container>
    )
}