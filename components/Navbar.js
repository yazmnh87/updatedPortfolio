import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from 'next/router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {BreakpointMobile, BreakpointDesktop, BreakpointLargeDevices, BreakpointTablet, BreakpointSmallMobile } from '../pages/GlobalStyle'
// @media only screen and (max-width: ${BreakpointLargeDevices + 'px'}) {
// }


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
justify-content: space-evenly;
width: 300px;
list-style: none;
/* border: 1px solid orange; */
}

.link{
color:#fff;
text-decoration: none;
font-family: ${props=> props.theme.fonts.primary};
font-size: 18px;
}

.activeLink{
color:${props=> props.theme.colors.secondary};
text-decoration: none;
font-family: ${props=> props.theme.fonts.primary};
font-size: 18px;
}


.workLinks{
    display: flex;
    width: 80px;
    justify-content:space-evenly;
    padding-right: 10px;
    border: 1px solid lime;

    @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
        padding-right: 0px;  
        width: 120px;
 }


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
    const router = useRouter()
    return(
        <NavContainer>
            <img src={'/personal_logo.png'}/>
            <ul>
                <li><Link href="/"><a className={router.pathname === "/" ? "activeLink" : "link"}>Home</a></Link></li>
                <li><Link href="/contact"><a className={router.pathname === "/contact" ? "activeLink" : "link"}>Contact</a></Link></li>
                {/* <li><Link>My Photos</Link></li> */}
                {/* <li><Link>Job History</Link></li> */}
            </ul>
            <div className="workLinks">
            <a href="https://github.com/yazmnh87"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                <a href="https://www.linkedin.com/in/william-violette-6b478724/"><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
            </div>
        </NavContainer>
    )
}

