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

  @media only screen and (max-width: ${BreakpointDesktop + 'px'}) {
      padding-top: 5px;
    height:55px;
    flex-direction: column;
    border:1px solid red;
}
`

const TextContainer = styled.div`
position: relative;
display: flex;
height: 100%;
width: 65%;
align-items: center;
justify-content: space-evenly;
margin-right:15px;
/* border: 1px solid blue; */

.name{
    position: absolute;
        /* top: 40%; */
        left: 0;
        /* transform: translate(-50%, -50%); */
        text-align: center;
    /* border:1px solid red; */
}

.time{
    position: absolute;
        /* top: 40%; */
        right: 0;
        /* transform: translate(-50%, -50%); */
        text-align: center;
    /* border:1px solid red; */
}

@media only screen and (max-width: ${(BreakpointLargeDevices + 102) + 'px'}) {
    border:1px solid purple;
    .name{
        display: none;
    /* border:1px solid green; */
    }
    .time{
        width:100%;
        text-align: center;
    border:1px solid green;
    }
}

@media only screen and (max-width: ${BreakpointDesktop + 'px'}) {
    margin:0 auto;
    padding-bottom: 5px;
    width:80%;
    border:1px solid blue;
}
`

const StyledName = styled.span`
text-align: left;
font-Size: ${props=> props.stringLen <= 12 ? 14 + 'px' : 12 + 'px'};
font-family: ${props=> props.theme.fonts.primary};
color: ${props=> props.theme.colors.secondary};
/* border:1px solid red; */
`

const StyledTime = styled.span`
padding: 0 2px;
font-Size: ${props=> props.stringLen && !props.screenWidth < 1200 <= 12 ? 14 + 'px' : 12 + 'px'};
font-family: ${props=> props.theme.fonts.primary};
color: ${props=> props.theme.colors.secondary};
/* border: 1px solid red; */
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
        case 'SCSS':
            return <img height={30} width={30} src={'sass_logo.png'}/>
        case 'HTML':
            return <img height={30} width={30} src={'html5_logo.png'}/>
        }
}


export const LanguageItem = ({language}) => {
    console.log( "length",language.name)
    const stringLen = language.name.length + String(language.hours).length + String(language.minutes).length
    return (
            <Container>
                {renderLogo(language.name)}
                <TextContainer>
                <h1 className="name"><StyledName screenWidth={screen} stringLen={stringLen}>{language.name}</StyledName></h1>
                <h1 className="time">
                {language.hours !== 0 ?
                <StyledTime stringLen={stringLen}>{language.hours}{" "}hr</StyledTime> : null}
                <StyledTime stringLen={stringLen}>{language.minutes}{" "}mins</StyledTime>
                </h1>
                </TextContainer>
            </Container>
    )
}