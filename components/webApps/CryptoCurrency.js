import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import img1 from '../../public/crypto_currency_screenshot.png'
import reactLogo from '../../public/react_logo.png'
import {
    BreakpointMobile,
    BreakpointDesktop,
    BreakpointLargeDevices,
    BreakpointTablet,
    BreakpointSmallMobile,
  } from '../../pages/GlobalStyle'

const Container = styled.div`
/* height:100%;
 */
 flex: 1;
width:100%;
border:1px solid blue;
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
/* border:1px solid red; */
@media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    margin: 0 auto;
}
`

const Title = styled.h2`
font-size: 22px;
width:100%;
color: ${props=> props.theme.colors.primary};
/* border:1px solid red; */
`

const DescriptionContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
`

const DescriptionText = styled.p`
font-size: 20px;
border:1px solid red;

.linkToSite{
    text-decoration:underline;
    color:  ${props=> props.theme.colors.secondary};
}

.linkToSite:hover{
    cursor: pointer;
}

`

const LogoContainer = styled.div`
display: flex;
height: 50px;
width:100%;
border:1px solid red;
`

const StyledLogo = styled.img`
/* position:absolute; */
bottom:0;
left: 20px;
height: 50px;
`

export const CryptoWebApp = props => {
    return (
        <Container>
            <Wrapper>

            <StyledImg src={img1}/>
            <Title>CryptoCurrency Dashboard</Title>
            </Wrapper>
            <DescriptionContainer>
                <DescriptionText>CryptoCurrency Dashboard is a realtime dashboard with prices for Bitcoin, Ethereum, Ripple, Litecoin and EOS. Uses React and axios, view site here <a href="http://crypto-dash.surge.sh/" className="linkToSite">CryptoDashboard</a> 

                </DescriptionText>
                <LogoContainer>
                <StyledLogo src={reactLogo}/>
                </LogoContainer>
            </DescriptionContainer>
        </Container>
    )
}