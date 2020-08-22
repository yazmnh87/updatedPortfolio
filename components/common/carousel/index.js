import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'
const CarouselContainer = styled.div`
position: relative;
height: 100%;
width: 100%;
border: 1px solid lime;
`

const CarouselSideCntrlLeft = styled.div`
position: absolute;
left: 0;
height:100%; 
min-width: 40; 
border:1px solid red;
`

const CarouselSideCntrlRight = styled.div`
position: absolute;
right: 0;
height:100%; 
width: 40; 
border:1px solid lime;
`

const IconCntrlLeft = styled(FontAwesomeIcon)`
position: relative;
top: 40%;
font-size: 40px;
padding: 10px;
color: black;
z-index: 99;
`
const IconCntrlRight = styled(FontAwesomeIcon)`
position: relative;
top: 40%;
font-size: 40px;
padding: 10px;
color: black;
z-index: 99;
`

const ImageContainer = styled.div`
flex: 1;
height: 100%;
border:1px solid blue;
`



export const Carousel = () => {
    return (
        <CarouselContainer>
          <CarouselSideCntrlLeft>
                <IconCntrlLeft icon={faCaretLeft}/>
          </CarouselSideCntrlLeft>
            <ImageContainer>

            </ImageContainer>
          <CarouselSideCntrlRight>
                <IconCntrlRight icon={faCaretRight}/>
          </CarouselSideCntrlRight>
            </CarouselContainer>
    )
}