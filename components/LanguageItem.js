import React from 'react';
import styled from 'styled-components';
import {BreakpointMobile, BreakpointDesktop, BreakpointLargeDevices, BreakpointTablet, BreakpointSmallMobile } from '../pages/GlobalStyle'


const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 40px;
width: 100%;
/* border: 1px solid red; */

img{
    margin-left: 15px;
}

 @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    width: 60%;
    margin: 0 auto;
  }
`

const TextContainer = styled.div`
display: flex;
height: 100%;
width: 65%;
align-items: center;
justify-content: space-evenly;
margin-right:15px;
/* border: 1px solid blue; */
`

const StyledName = styled.span`
font-Size: ${props=> props.stringLen <= 12 ? 14 + 'px' : 12 + 'px'};
font-family: ${props=> props.theme.fonts.primary};
color: ${props=> props.theme.colors.secondary};
`

const StyledTime = styled.span`
font-Size: ${props=> props.stringLen <= 12 ? 14 + 'px' : 12 + 'px'};
font-family: ${props=> props.theme.fonts.primary};
color: ${props=> props.theme.colors.secondary};
`


const renderLogo = language => {
    switch(language){
        case 'JavaScript':
            return <img height={30} width={30} src={'js_logo.png'}/>
        case 'JSON':
            return <img height={30} width={30} src={'json_logo.png'}/>
        case 'Git Config':
            return <img height={30} width={30} src={'git_logo.png'}/>
        case 'Objective-C':
            return <img height={30} width={30} src={'objective_c_logo.png'}/>
        case 'XML':
            return <img height={30} width={30} src={'xml_logo.png'}/>
        case 'Groovy':
            return <img height={30} width={30} src={'groovy_logo.png'}/>
        case 'Other':
            return <img height={30} width={30} src={'keyboard_logo.png'}/>
        case 'TypeScript':
            return <img height={30} width={30} src={'typescript_logo.png'}/>
        case 'Kotlin':
            return <img height={30} width={30} src={'kotlin_logo.png'}/>
        case 'CSS':
            return <img height={30} width={30} src={'css3_logo.png'}/>
        }
}


export const LanguageItem = ({language}) => {
    console.log( "length",language.name.length + String(language.hours).length + String(language.minutes).length)
    const stringLen = language.name.length + String(language.hours).length + String(language.minutes).length
    return (
            <Container>
                {renderLogo(language.name)}
                <TextContainer>
                <StyledName stringLen={stringLen}>{language.name}</StyledName>
                {language.hours !== 0 ?
                <StyledTime stringLen={stringLen}>{language.hours}{" "}hr</StyledTime> : null}
                <StyledTime stringLen={stringLen}>{language.minutes}{" "}mins</StyledTime>
                </TextContainer>
            </Container>
    )
}