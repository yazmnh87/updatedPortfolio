import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../providers/DataProvider';
import styled from 'styled-components';
import { LanguageItem } from '../components/LanguageItem';
import { Carousel } from './common/carousel/Carousel'
import {BreakpointMobile, BreakpointDesktop, BreakpointLargeDevices, BreakpointTablet, BreakpointSmallMobile } from '../pages/GlobalStyle'
import {CryptoWebApp} from '../components/webApps/CryptoCurrency'
import {GitHubJobsApp} from '../components/webApps/GithubJobs'
import {Q3StudentPortal} from '../components/webApps/Q3StudentPortal'
import {Wild5App} from '../components/mobileApps/Wild5App'
import {FindAnHerbApp} from '../components/mobileApps/FindAnHerb'
import reactLogo from '../public/react_logo.png'
import jsLogo from '../public/js_logo.png'
import cssLogo from '../public/css3_logo.png'
import gitLogo from '../public/git1_logo.png'
import tsLogo from '../public/typescript_logo.png'
import kotlinLogo from '../public/kotlin_logo.png'
import mongoLogo from '../public/mongo_logo.png'
import nodeLogo from '../public/node_logo.png'
import githubLogo from '../public/github_logo.png'
import firebaseLogo from '../public/firebase_logo.png'
const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  height: 80vh;
  box-sizing: border-box;
  /* border: 1px solid blue; */

  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
      height: 100vh;
       grid-template-columns: 1fr
 }
`;

const SideBar = styled.div`
  height: 100vh;
  border: 2px solid ${(props) => props.theme.colors.secondary};

  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    height: 100vh;
 }
`;

const StatsWrapper = styled.div`
flex-shrink: 1;
padding-bottom: 10px;
/* border:1px solid red; */
`

const SkillsWrapper = styled.div`
display: flex;
flex-direction: column;
flex-shrink: 1;
width:100%;
justify-content: center;
padding-bottom: 10px;
/* border:1px solid lime; */
`

const LogoWrapper = styled.div`
display: flex;
flex-wrap: wrap;

`

const StyledLogo = styled.img`
height: 50px;
margin: auto auto;
padding: 2px;
/* border:1px solid red; */
`

const HorizontalContainerWrapper = styled.div`
display: block;
/* grid-template-columns: 1fr; */
/* border: 1px solid blue; */
`

const HorizontalCarousel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  /* border: 1px solid lime; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
      height: 100vh;
    grid-template-columns:1fr;
 }
`;

const CarouselWrapper = styled.div`
height: 100%;
padding: 10px;
`

const CarouselContainer = styled.div`
height: 100%;
max-height: 100%;
width: 100%;
/* padding: 15px; */
border: 2px solid ${props=> props.theme.colors.secondary};

`

const TitleContainer = styled.div`
height: 50px;
width: 100%;
/* border: 1px solid red; */
`
const TitleSubContainer = styled.div`
display: inline-grid;
height: 100%;
width:100%;
justify-content: center;
grid-template-columns: 1fr 1fr;
/* border: 1px solid lime; */
`

const TitleText = styled.h1`
font-size: 20px;
margin: auto;
font-family: ${(props) => props.theme.fonts.primary};
color: ${(props) => props.theme.colors.secondary};
/* border: 1px solid red; */
`



const WebApps = styled.div`
  height: 50%;
  /* border: 1px solid purple; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    height: 100vh;
 }
`;



const MobileApps = styled.div`
  height: 50%;
  /* border: 1px solid blue; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    height: 100vh;
 }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 0 0;

  .main {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
  }

  .sub {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 16px;
    color: ${(props) => props.theme.colors.secondary};
  }

  .waka {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 11px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
const Stats = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid lime; */
  margin: 10px 0 0 0;
  .timeText {
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 600;
    margin: auto;
  }
`;

const MappedTime = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;
`;

export const MainContainer = (props) => {
  const { wakaId, getWakaStats } = useContext(DataContext);
  const [value, setValue] = useState(0)
  const [state, setState] = useState({
    totalTime: '',
    languages: [],
    loading: false,
  });
  useEffect(() => {
    loadData();
  }, [wakaId]);
  const loadData = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    const data = await getWakaStats(wakaId);
    if (data.data) {
      console.log('what is this', data.data.languages);
      setState((prevState) => ({
        ...prevState,
        totalTime: data.data.human_readable_total_including_other_language,
        languages: [...state.languages, ...data.data.languages],
        loading: false,
      }));
    }
  };
  const mappedTime =
    state.languages.length !== 0
      ? state.languages.map((language, i) => {
          return <LanguageItem key={i} language={language} />;
        })
      : null;

const onChange = (value) => {
    setValue(value)
}


  return (
    <Container>
      <SideBar>

        <Title>
          <div>
            <span className="main">Coding Summary</span>
          </div>
          <div>
            <span className="sub">Last 7 Days</span>
          </div>
          <div>
            <span className="waka">
              stats provided by <a href="https://wakatime.com/">WakaTime</a>
            </span>
          </div>
        </Title>
          <StatsWrapper>
        <Stats>
          <span className="timeText">Total Time: {state.totalTime}</span>
          <MappedTime>
            {state.loading ? (
              <div className="sk-circle sk-center">
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
              </div>
            ) : (
              mappedTime
            )}
          </MappedTime>
        </Stats>
          </StatsWrapper>
          <SkillsWrapper>
          <Title>
          <div>
            <span className="main">Skills</span>
          </div>
        </Title>
        <LogoWrapper>
        <StyledLogo src={reactLogo}/>
        <StyledLogo src={jsLogo}/>
        <StyledLogo src={cssLogo}/>
        <StyledLogo src={gitLogo}/>
        <StyledLogo src={tsLogo}/>
        <StyledLogo src={kotlinLogo}/>
        <StyledLogo src={mongoLogo}/>
        <StyledLogo src={nodeLogo}/>
        <StyledLogo src={githubLogo}/>
        <StyledLogo src={firebaseLogo}/>
        </LogoWrapper>
          </SkillsWrapper>
      </SideBar>
      <HorizontalContainerWrapper>
            <TitleContainer>
                <TitleSubContainer>
                    <TitleText>Web Apps</TitleText>
                    <TitleText>Mobile Apps</TitleText>
                </TitleSubContainer>
            </TitleContainer>
      <HorizontalCarousel>
        <WebApps>
            <CarouselWrapper>
            <CarouselContainer>
              <Carousel components={[<CryptoWebApp/>, <GitHubJobsApp/>, <Q3StudentPortal/>]}/>
            </CarouselContainer>
            </CarouselWrapper>
              {/* <img src={'git_logo.png'} /> */}
                  
        </WebApps>
        <MobileApps>
            <CarouselWrapper>
        <CarouselContainer>
              <Carousel components={[<Wild5App />, <FindAnHerbApp />]}/>
            </CarouselContainer>
            </CarouselWrapper>
        </MobileApps>
      </HorizontalCarousel>
      </HorizontalContainerWrapper>
    </Container>
  );
};
