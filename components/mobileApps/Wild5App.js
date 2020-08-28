import React from 'react'
import styled from 'styled-components'
import wild5Login from '../../public/wild5_login_new.png'
import wild5Landing from '../../public/wild5_landing.png'
import reactLogo from '../../public/react_logo.png'
import firebaseLogo from '../../public/firebase_logo.png'

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
border:1px solid red;
`

const ImageContainer = styled.div`
display: flex;
`

const StyledImg = styled.img`
height: 120px;
padding: 10px;
border:1px solid red;
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

.googlePlayLink{
text-decoration: underline;
color: ${props=> props.theme.colors.secondary}; 
}

.googlePlayLink:hover{
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
height: 50px;
`

export const Wild5App = (props) => {
    return (
        <Container>
            <Wrapper>
                <ImageContainer>

                <StyledImg src={wild5Login}/>
                <StyledImg src={wild5Landing}/>
                </ImageContainer>
                <Title>Wild5 Wellness IOS & Android App</Title>
            </Wrapper>
            <DescriptionContainer>
                <DescriptionText>Wild 5 Wellness Kickstart 30 app is a full stack React Native app available on both IOS and android. The app is a compliment tool to the book to assist readers to be able to track their progress more easily. Check out the <a href="https://play.google.com/store/apps/details?id=com.wild5wellness.kickstart30" className="googlePlayLink">App</a>
    {" "}and also take a look at the <a href="https://www.amazon.com/WILD-Wellness-KickStart30-Proven-Program/dp/1791658806" className="googlePlayLink">Book</a>.
                </DescriptionText>
                <LogoContainer>
                <StyledLogo src={reactLogo}/>
                <StyledLogo src={firebaseLogo}/>
                </LogoContainer>
            </DescriptionContainer>
        </Container>
    )
}