import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 40px;
width: 100%;
border: 1px solid red;

span{
    font-Size: 14px;
    font-family: ${props=> props.theme.fonts.primary};
    color: ${props=> props.theme.colors.secondary};
}
`


// const renderLogo = language => {
//     switch(language){
//         case 'JavaScript':
//             return <img src={'javascript_logo.png'}/>
//     }
// }


export const LanguageItem = ({language}) => {
    return (
            <Container>
                <span>{language.name}</span>
                {language.hours !== 0 ?
                <span>{language.hours}hrs</span> : null}
                <span>{language.minutes}mins</span>
            </Container>
    )
}