import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
height: 40px;
width: 100%;
border: 1px solid red;

span{
    font-Size: 14px;
    font-family: ${props=> props.theme.fonts.primary};
    color: ${props=> props.theme.colors.secondary};
}
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
            return <img height={30} width={30} src={'javascript_logo.png'}/>
    }
}


export const LanguageItem = ({language}) => {
    return (
            <Container>
                <span>{renderLogo(language.name)}</span>
                <span>{language.name}</span>
                {language.hours !== 0 ?
                <span>{language.hours}hrs</span> : null}
                <span>{language.minutes}mins</span>
            </Container>
    )
}