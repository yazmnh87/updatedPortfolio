import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactInterval from 'react-interval';
import {BreakpointMobile, BreakpointDesktop, BreakpointLargeDevices, BreakpointTablet, BreakpointSmallMobile } from '../pages/GlobalStyle'


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
    /* width: 400px; */
    padding:0 20px;
    background-color: ${props=> props.theme.colors.white};
    border-radius: 8px;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
        display: flex;
    height: 50%;
    padding:0 20px;
    background-color: ${props=> props.theme.colors.white};
    border-radius: 8px;
    justify-content:center;
    align-items:center;
}
}
`

export const HeaderSection = props => {
const adjs = ['Driven', 'Attentive', 'Organized', 'Radiant', 'Curious', 'Insipred', 'Unity', 'Imperfect', 'Dedicated', 'Innovative', 'Balanced', 'Communicating','Action', 'Aware', 'Accomplishing', 'Wise', 'Human', 'mindful', 'intelligent', 'Reflecting', 'Endurance', 'Integrity', 'Spirit', 'Abundance', 'Life Force', 'Questioning', 'Answering', 'Vibration', 'a Developer']
const[state, setState] = useState({
    currentIndex: 0
})

const updateAdj = () => {
    if(state.currentIndex !== adjs.length -1){
        setState({...state, currentIndex: state.currentIndex +1})
    }
}

 useEffect(()=>{
    

 },[])

    return(
        <Container>
            <div className="adjContainer">
                <h1>I am {adjs[state.currentIndex]}</h1>
                <ReactInterval timeout={5000} enabled={true}
                    callback={() => updateAdj()} />
            </div>

        </Container>
    )
}