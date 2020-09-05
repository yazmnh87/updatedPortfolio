import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 40vh;
width: 100%;
/* border:1px solid red; */

.title{
    text-align: center;
    /* border:1px solid red; */
}

`

const TextContainer = styled.div`
/* border:1px solid purple; */
`

const Title = styled.span`
font-size: 28px;
font-family: ${props=> props.theme.fonts.primary};
color: ${props=> props.theme.colors.primary};
`

const SubTitle = styled.span`
font-size: 24px;
font-family: ${props=> props.theme.fonts.primary};
color: ${props=> props.theme.colors.secondary};
`

const Contact = styled.span`
font-size: 24px;
font-family: ${props=> props.theme.fonts.primary};
color: ${props=> props.theme.colors.primary};
`


export const Heading = () => {
    return (
        <Container>
            <TextContainer>
            <h1 className="title"><Title>Contact Me</Title></h1>
            <h1 className="title"><SubTitle>Call/Text</SubTitle>{" "}<Contact>(603)315-7540</Contact></h1>
            <h1 className="title"><SubTitle>Email</SubTitle>{" "}<Contact>violettewj@gmail.com</Contact></h1>
            </TextContainer>
        </Container>
    )
}