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
flex: 1;
width:100%;
border:1px solid purple;
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: 40% 60%;
/* border:1px solid red; */
@media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    grid-template-columns: 1fr;
}
`

const StyledImg = styled.img`
height: 100px;
padding: 10px;
/* border:1px solid blue; */
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

.linkToSite{
    text-decoration:underline;
    color:  ${props=> props.theme.colors.secondary};
}

.linkToSite:hover{
    cursor: pointer;
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
/* position:absolute; */
bottom:0;
left: 20px;
height: 50px;
padding-left: 5px;
padding-bottom: 5px;
`

export const Q3StudentPortal = props => {
    return (
        <Container>
            <Wrapper>
            <StyledImg src={'Q3_student_portal.png'}/>
            <Title>Q3 Student Portal</Title>
            </Wrapper>
            <DescriptionContainer>
                <DescriptionText>Q3 Student Portal is a prototype for a company that provides income sharing loans to scholarship students.  Visit the site and take a tour, email: 'test@test.com' pw: '123456' <a href="https://powerful-coast-27812.herokuapp.com" className="linkToSite" target="_blank">Q3StudentPortal</a> 

                </DescriptionText>
                <LogoContainer>
                <StyledLogo src={'react_logo.png'}/>
                <StyledLogo src={'node_logo.png'}/>
                </LogoContainer>
            </DescriptionContainer>
        </Container>
    )
}