import React from 'react'
import styled from 'styled-components'
import findAnHerbLogin from '../../public/findAnHerb_initial.png'
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
                <StyledImg src={findAnHerbLogin}/>
                <Title>Find An Herb</Title>
            </Wrapper>
            <DescriptionContainer>
                <DescriptionText>FindAnHerb App is a React Native app that compliments my website FindAnHerb.com.  FindAnHerb app is currently available on TestFlight for IOS.  Request Access to demo.</DescriptionText>
                <StyledLogo src={reactLogo}/>
            </DescriptionContainer>
        </Container>
    )
}