import React, { useContext, useState, useEffect } from 'react';
import { WakaTimeClient, RANGE } from 'wakatime-client';
import styled from 'styled-components';
import { LanguageItem } from '../components/LanguageItem';
import { Carousel } from './common/carousel/Carousel';
import {
  BreakpointMobile,
  BreakpointDesktop,
  BreakpointLargeDevices,
  BreakpointTablet,
  BreakpointSmallMobile,
} from '../components/GlobalStyle';
import { CryptoWebApp } from '../components/webApps/CryptoCurrency';
import { GitHubJobsApp } from '../components/webApps/GithubJobs';
import { Q3StudentPortal } from '../components/webApps/Q3StudentPortal';
import { Wild5App } from '../components/mobileApps/Wild5App';
import { FindAnHerbApp } from '../components/mobileApps/FindAnHerb';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  height: 80vh;
  /* box-sizing: border-box; */
  /* border: 1px solid blue; */

  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    height: 100%;
    grid-template-columns: 1fr;
    /* overflow: scroll; */
    /* border: 1px solid lime; */
  }
`;

const SideBar = styled.div`
  height: 100vh;
  /* border: 2px solid ${(props) => props.theme.colors.secondary}; */

  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    height: 90vh;
    /* border:1px solid blue; */
  }
  /* @media only screen and (max-width: ${BreakpointTablet + 'px'}) {
    height: 110vh;
    /* border:1px solid blue; 
  }
    */
`;

const StatsWrapper = styled.div`
  flex-shrink: 1;
  padding-bottom: 10px;
  /* border:1px solid red; */
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  width: 100%;
  justify-content: center;
  padding-bottom: 10px;
  /* border:1px solid lime; */
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border:1px solid lime; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    width: 80%;
    margin: 0 auto;
  }
`;

const StyledLogo = styled.img`
  height: 50px;
  margin: auto auto;
  padding: 2px;
  /* border:1px solid red; */
`;

const HorizontalContainerWrapper = styled.div`
  display: block;
  /* grid-template-columns: 1fr; */
  /* border: 1px solid red; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    height: 125vh;
  }
`;

const HorizontalCarousel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50vh;
  /* border: 1px solid lime; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    height: 100%;
    grid-template-columns: 1fr;
    /* border: 1px solid green; */
  }
  @media only screen and (max-width: ${BreakpointTablet + 'px'}) {
    height: 100%;
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: ${BreakpointLargeDevices + 'px'}) {
    height: 100%;
    grid-template-columns: 1fr;
  }
`;

const CarouselWrapper = styled.div`
  height: 50vh;
  padding: 10px;
  box-sizing: border-box;
  /* border:1px solid red; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    display: flex;
    height: 400px;
  }

  /* @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    display: flex;
    height: 400px;
  } */

  @media only screen and (max-width: ${BreakpointLargeDevices + 'px'}) {
    display: flex;
    height: 400px;
  }
`;

const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  /* padding: 15px; */
  /* border: 2px solid ${(props) => props.theme.colors.secondary}; */
  /* border:1px solid red; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
  }
`;

const TitleContainer = styled.div`
  height: 50px;
  width: 100%;
  /* border: 1px solid red; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    display: none;
  }
  @media only screen and (max-width: ${BreakpointLargeDevices + 'px'}) {
    display: none;
  }
`;
const TitleSubContainer = styled.div`
  display: inline-grid;
  height: 100%;
  width: 100%;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  /* border: 1px solid lime; */
`;

const TitleText = styled.h1`
  font-size: 2rem;
  margin: auto;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.secondary};
  /* border: 1px solid red; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    display: inline-block;
  }
  @media only screen and (max-width: ${BreakpointLargeDevices + 'px'}) {
    display: inline-block;
  }
`;

const WebAppsHeader = styled.div`
  display: none;
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    display: flex;
    max-height: 50px;
    width: 100%;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    /* border: 1px solid red; */
  }
  @media only screen and (max-width: ${BreakpointLargeDevices + 'px'}) {
    display: flex;
    max-height: 50px;
    width: 100%;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    /* border: 1px solid red; */
  }
`;

const WebApps = styled.div`
  height: 50%;
  /* border: 1px solid purple; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    /* height: 60vh; */

    /* border: 1px solid purple; */
  }
`;

const MobileApps = styled.div`
  height: 50%;
  /* border: 1px solid blue; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    /* height: 100vh; */
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
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
  }

  .sub {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  .waka {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 11px;
    color: ${(props) => props.theme.colors.primary};
  }
  @media only screen and (max-width: ${BreakpointDesktop + 'px'}) {
    font-size: 1rem;
    text-align: center;
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
  @media only screen and (max-width: ${BreakpointDesktop + 'px'}) {
    .timeText {
      text-align: center;
    }
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width:100%; */
  /* border: 1px solid lime; */

  img {
    height: 155px;
    width: 155px;
    border-radius: 50%;
    object-fit: cover;
    /* border: 1px solid lime; */
  }

  .imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* border: 1px solid purple; */
  }

  .contentConatiner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    /* border: 1px solid blue; */
  }

  .name {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primary};
  }

  .title {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 500;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  .description {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.secondary};
    /* border:1px solid blue; */
  }
@media only screen and (max-width: ${BreakpointMobile + 'px'}) {
  height: 50vh;
  .name {
    margin:0 auto;
  }
  .title {
    margin:0 auto;
    padding:5px;
  }
  .description {
    margin:0 auto;
    text-align: center;
    padding: 5px;

  }
}
`;

const Content = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  align-items: center;
  grid-template-columns: 200px 400px;
  grid-gap: 0px;
  /* border: 1px solid red; */
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    grid-template-columns:1fr;
  }
`;

const AboutTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  width: 100%;
`;

const AboutText = styled.span`
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.secondary};
`;

const MappedTime = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 0;

  .no_stats{
    font-size: 2rem;
    margin:0 auto;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.secondary};

  }
`;
export const MainContainer = (props) => {
  const client = new WakaTimeClient('0b2b4c46-69d4-4edb-b6f8-f4995b8f9e96');
  const [value, setValue] = useState(0);
  const [state, setState] = useState({
    totalTime: '',
    languages: [],
    loading: false,
  });
  useEffect(() => {
    let subscribed;
    subscribed = true;
    if(process.browser && subscribed){
      loadData();
    }
    return () => subscribed = false;
   
 }, []);
  const loadData = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    const myUserDetails = await client.getMe();
     if(myUserDetails){
         console.log("IMPORTANT", myUserDetails)
         const stats = await client.getUserStats({
             userId: myUserDetails.data.id,
             range: RANGE.LAST_7_DAYS
            });
            if(stats){
              console.log("IMPORTANT",{stats})
              setState((prevState) => ({
                ...prevState,
                totalTime: stats.data.human_readable_total_including_other_language,
                languages: [...state.languages, ...stats.data.languages],
                loading: false,
              }));
            }
          }
  };
  const mappedTime =
    state.languages.length !== 0
      ? state.languages.map((language, i) => {
          return <LanguageItem key={i} language={language} />;
        })
      : null;

  const onChange = (value) => {
    setValue(value);
  };

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
              ) : state.languages.length !== 0 ? (
                mappedTime
              ) : (
                <span className="no_stats">NO STATS AVAILABLE</span>
              )
              }
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
            <StyledLogo src={'./react_logo.png'} />
            <StyledLogo src={'./js_logo.png'} />
            <StyledLogo src={'./css3_logo.png'} />
            <StyledLogo src={'./git1_logo.png'} />
            <StyledLogo src={'./typescript_logo.png'} />
            <StyledLogo src={'./kotlin_logo.png'} />
            <StyledLogo src={'./mongo_logo.png'} />
            <StyledLogo src={'./node_logo.png'} />
            <StyledLogo src={'./github_logo.png'} />
            <StyledLogo src={'./firebase_logo.png'} />
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
          <WebAppsHeader>
            <TitleText>Web Apps</TitleText>
          </WebAppsHeader>
          <WebApps>
            <CarouselWrapper>
              <CarouselContainer>
                <Carousel
                  components={[
                    <CryptoWebApp />,
                    <GitHubJobsApp />,
                    <Q3StudentPortal />,
                  ]}
                />
              </CarouselContainer>
            </CarouselWrapper>
          </WebApps>
          <WebAppsHeader>
            <TitleText>Mobile Apps</TitleText>
          </WebAppsHeader>
          <MobileApps>
            <CarouselWrapper>
              <CarouselContainer>
                <Carousel components={[<Wild5App />, <FindAnHerbApp />]} />
              </CarouselContainer>
            </CarouselWrapper>
          </MobileApps>
        </HorizontalCarousel>
        <AboutContainer>
          <AboutTitleContainer>
            <h1>
              <AboutText>About</AboutText>
            </h1>
          </AboutTitleContainer>
          <Content>
            <div className="imgContainer">
              <img src={'./william.jpg'} />
            </div>
            <div className="contentConatiner">
              <span className="name">William Violette</span>
              <span className="title">FS JS Developer</span>
              <p className="description">
                Bill Violette is from South Jordan, UT where he works as a full
                time freelance software developer. Outside of pursuing greatness
                within his career as a developer Bill spends his time working as
                a hobbyist mechanic rebuilding cars, playing golf and enjoying
                the mountains of utah.
              </p>
            </div>
          </Content>
        </AboutContainer>
      </HorizontalContainerWrapper>
    </Container>
  );
};
