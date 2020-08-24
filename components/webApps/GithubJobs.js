import React from 'react'
import styled from 'styled-components'
import img1 from '../../public/gitHubjobs_screenshot.png'
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
height: 100px;
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

export const GitHubJobsApp = props => {
    return (
        <Container>
            <Wrapper>

            <StyledImg src={img1}/>
            <Title>GitHub Jobs</Title>
            </Wrapper>
            <DescriptionContainer>
                <DescriptionText>Github jobs lists jobs from Github's API, I implemented pagination of results and a custom search query. Uses React, axios, and bootstrap, view site here 

                </DescriptionText>
                <StyledLogo src={reactLogo}/>
            </DescriptionContainer>
        </Container>
    )
}
