import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
width: 100%;
background-color: ${props => props.theme.colors.primary};

.imgContainer{
    width: 100px;
    border:1px solid lime;
}

img{
    display: block;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: 100px;
    /* object-fit: contain; */
    border: 1px solid lime;
}

ul{
display: flex;
flex-direction: row;
list-style: none;
border: 1px solid lime;
}

ul li{
    color: #fff;
    font-family: ${props=> props.theme.fonts.primary};
    border: 1px solid lime;
}

.workLinks{
    display: flex;
    width: 80px;
    justify-content:space-evenly;
    padding-right: 10px;
    border: 1px solid lime;
}

.icon{
    color:#fff;
    font-size: 30px;
}

.icon:hover{
    cursor: pointer;
}
`

export const Navbar = props => {
    return(
        <NavContainer>
            <img src={'/personal_logo_free.png'}/>
            <ul>
                <li><a>Home</a></li>
                <li><a>Contact</a></li>
                <li><a>Skills</a></li>
                <li><a>Job History</a></li>
            </ul>
            <div className="workLinks">
            <a href="https://github.com/yazmnh87"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                <a href="https://www.linkedin.com/in/william-violette-6b478724/"><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
            </div>
        </NavContainer>
    )
}

