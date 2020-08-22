import React from 'react'
import styled from 'styled-components'
import img1 from '../../public/crypto_currency_screenshot.png'

const Container = styled.div`
/* height:100%;
 */
 flex: 1;
width:100%;
border:1px solid red;
`

const StyledImg = styled.img`
height: 100px;
width: 100px;

`

export const CryptoWebApp = props => {
    return (
        <Container>
            <h1>HELLO</h1>
            <StyledImg src={img1}/>
        </Container>
    )
}
