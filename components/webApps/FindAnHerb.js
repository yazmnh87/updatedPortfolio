import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {
    BreakpointMobile,
    BreakpointDesktop,
    BreakpointLargeDevices,
    BreakpointTablet,
    BreakpointSmallMobile,
  } from '../GlobalStyle'

const Container = styled.div`
flex: 1;
height:100%;
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

const StyledImg = styled.img`
height: 90px;
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
/* border:1px solid purple; */
`

export const FindAnHerbWebApp = props => {
    return (
        <Container>
            <Wrapper>
            <StyledImg src={'findAnHerbweb.png'}/>
            {/* <StyledImg src={'findAnHerbwebHerbs.png'}/> */}
            <Title>FindAnHerb.com</Title>
            </Wrapper>
            <DescriptionContainer>
                <DescriptionText>FindAnHerb.com is a website to help you find natural remedies.  Search our library of herbs, remedies and ailments that you may be experiencing. Check out <a href="https://www.findanherb.com/herbs" className="linkToSite" target="_blank">FindAnHerb.com</a> 

                </DescriptionText>
                <LogoContainer>
                <StyledLogo src={'react_logo.png'}/>
                <StyledLogo src={'node_logo.png'}/>
                </LogoContainer>
            </DescriptionContainer>
        </Container>
    )
}
