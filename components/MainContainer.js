import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: grid;
grid-template-columns: 2fr 10fr;
height: 80vh;
box-sizing: border-box;
border: 1px solid blue;
`

const SideBar = styled.div`
height: 100%;
border: 1px solid purple;
`

const HorizontalCarousel = styled.div`
height: 100%;
border: 1px solid black;
`

export const MainContainer = props => {
    return(
        <Container>
            <SideBar>

            </SideBar>
            <HorizontalCarousel>

            </HorizontalCarousel>

        </Container>
    )
}