import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
height: 20vh;
width: 100%;
justify-content:center;
align-items:center;
background-color: ${props=> props.theme.colors.gray};

.adjContainer{
    display: flex;
    height: 50%;
    width: 50%;
    background-color: ${props=> props.theme.colors.white};
    border-radius: 8px;
    justify-content:center;
    align-items:center;
}
`

export const HeaderSection = props => {
const adjs = ['Driven', 'attentive', 'organized', 'radiant', 'curious', 'insipred', 'unity', 'imperfect', 'dedicated', 'innovative', 'balanced', 'communicating','action', 'aware', 'accomplishing', 'wise', 'human', 'mindful', 'intelligent', 'reflecting', 'endurance', 'integrity', 'spirit', 'abundance', 'life force', 'pure', 'questioning', 'answering', 'vibration', 'Developer']
let currentIndex = 0

const updateAdj = () => {
}

 useEffect(()=>{
    

 },[])

    return(
        <Container>
            <div className="adjContainer">
                <h1>I am</h1>
            </div>

        </Container>
    )
}