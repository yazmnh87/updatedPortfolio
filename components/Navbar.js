import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from 'next/router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
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


.resumeWrapper{
position: absolute;
right: 10%;
border:1px solid white;
}

.spanWrapper{
    display:inline-block;
    margin: auto 0;
    border:1px solid lime;
}

span{
    color: white;
    font-family: ${props=> props.theme.fonts.primary};
}


ul{
display: flex;
justify-content: space-evenly;
width: 300px;
list-style: none;
/* border: 1px solid red; */
}

.link{
color:#fff;
text-decoration: none;
font-family: ${props=> props.theme.fonts.primary};
font-size: 18px;
/* border: 1px solid orange; */
}

.activeLink{
color:${props=> props.theme.colors.secondary};
text-decoration: none;
font-family: ${props=> props.theme.fonts.primary};
font-size: 18px;
/* border: 1px solid orange; */
}


.workLinks{
    display: flex;
    width: 80px;
    justify-content:space-evenly;
    padding-right: 10px;
    /* border: 1px solid lime; */

    @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
        padding-right: 0px;  
        width: 80px;
/* border: 1px solid orange; */
 }


}

.icon{
    color:#fff;
    font-size: 30px;
}

.iconDownload{
    color:#fff;
    padding: 5px;
    font-size: 20px;
}

.downloadText{
    margin: 0 auto;
}

.icon:hover{
    cursor: pointer;
}

@media only screen and (max-width: ${BreakpointMobile + 'px'}) {
   span{
       display:none;
   }
   .resumeWrapper{
position: absolute;
right: 20%;
border:1px solid white;
display:none;
}

.resumeWrapper:hover{
cursor: pointer;
}

ul{
    list-style: none;
    padding: 0;
    width: 120px;
}

.link{
padding: 5px;
}

.activeLink{
padding: 5px;

}

.workLinks{
    border:1px solid red;
}

}
`

const PersonalLogo = styled.img`
height: 100px;
/* border:1px solid lime; */
`

export const Navbar = props => {
    const router = useRouter()

const downloadFile = () => {
    console.log("getFILErunning")
    axios.get('/api/resumeRoute').then(res => console.log(res)).catch(err => console.log(err))
}

    return(
        <NavContainer>
            <PersonalLogo src={'/1.png'}/>
            <ul>
                <li><Link href="/"><a className={router.pathname === "/" ? "activeLink" : "link"}>Home</a></Link></li>
                <li><Link href="/contact"><a className={router.pathname === "/contact" ? "activeLink" : "link"}>Contact</a></Link></li>
                {/* <li><Link>My Photos</Link></li> */}
                {/* <li><Link>Job History</Link></li> */}
            </ul>
            {/* <div onClick={()=> downloadFile()} className="resumeWrapper">
                <FontAwesomeIcon className="iconDownload" icon={faDownload}/>
                <div className="spanWrapper">

                <span className="downloadText">Download Resume</span>
                </div>
            </div> */}
            <div className="workLinks">
            <a href="https://github.com/yazmnh87"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                <a href="https://www.linkedin.com/in/william-violette-6b478724/"><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
            </div>
        </NavContainer>
    )
}

