import React from 'react';
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import {Heading} from '../components/contact/Heading'
import Pixel from '../components/pixel'
import { FacebookProvider, CustomChat } from 'react-facebook';

const Container = styled.div`
height:100vh;
width:100vw;
/* border:1px solid blue; */
`


const Contact = props => {
    return (
        <Container>
        <Navbar />
        <Heading />
        {/* <CustomChat pageId="106784474497057" minimized={false}/> */}
        </Container>

    )
}

export default Contact;