import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactInterval from 'react-interval';

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
const adjs = ['Driven', 'attentive', 'organized', 'radiant', 'curious', 'insipred', 'unity', 'imperfect', 'dedicated', 'innovative', 'balanced', 'communicating','action', 'aware', 'accomplishing', 'wise', 'human', 'mindful', 'intelligent', 'reflecting', 'endurance', 'integrity', 'spirit', 'abundance', 'life force', 'questioning', 'answering', 'vibration', 'a Developer']
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