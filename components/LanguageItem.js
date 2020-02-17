import React from 'react';
import styled from 'styled-components';

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

span{
    font-Size: 14px;
    font-family: ${props=> props.theme.fonts.primary};
    color: ${props=> props.theme.colors.secondary};
}
`

const TextContainer = styled.div`
display: flex;
height: 100%;
width: 65%;
align-items: center;
justify-content: space-evenly;
margin-right:15px;
border: 1px solid blue;
`


const renderLogo = language => {
    switch(language){
        case 'JavaScript':
            return <img height={30} width={30} src={'javascript_logo.png'}/>
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
        }
}


export const LanguageItem = ({language}) => {
    return (
            <Container>
                {renderLogo(language.name)}
                <TextContainer>
                <span>{language.name}</span>
                {language.hours !== 0 ?
                <span>{language.hours}hrs</span> : null}
                <span>{language.minutes}mins</span>
                </TextContainer>
            </Container>
    )
}