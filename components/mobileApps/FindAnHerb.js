import React from 'react'
import styled from 'styled-components'
import wild5Login from '../../public/wild5_login_new.png'
import reactLogo from '../../public/react_logo.png'

const Container = styled.div`
/* height:100%;
 */
 flex: 1;
width:100%;
border:1px solid red;
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: 40% 60%;
border:1px solid red;
`

const StyledImg = styled.img`
height: 150px;
padding: 10px;
border:1px solid red;
`

const Title = styled.h2`
font-size: 22px;
width:100%;
border:1px solid red;
`

const DescriptionContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
`

const DescriptionText = styled.p`
font-size: 20px;
border:1px solid red;
`

const StyledLogo = styled.img`
position:absolute;
bottom:0;
left: 20px;
height: 50px;
`

export const FindAnHerbApp = (props) => {
    return (
        <Container>
            <Wrapper>
                <StyledImg src={wild5Login}/>
                <Title>Find An Herb</Title>
            </Wrapper>
            <DescriptionContainer>
                <DescriptionText>CryptoCurrency Dashboard is a realtime dashboard with prices for Bitcoin, Ethereum, Ripple, Litecoin and EOS. Uses React and axios, view site here 

                </DescriptionText>
                <StyledLogo src={reactLogo}/>
            </DescriptionContainer>
        </Container>
    )
}