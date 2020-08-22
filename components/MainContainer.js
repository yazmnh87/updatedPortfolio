import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../providers/DataProvider';
import styled from 'styled-components';
import { LanguageItem } from '../components/LanguageItem';
import { Carousel } from './common/carousel/Carousel'
import {BreakpointMobile, BreakpointDesktop, BreakpointLargeDevices, BreakpointTablet, BreakpointSmallMobile } from '../pages/GlobalStyle'
import {CryptoWebApp} from '../components/webApps/CryptoCurrency'
import {GitHubJobsApp} from '../components/webApps/GithubJobs'
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
  height: 100%;
  /* border: 1px solid ${(props) => props.theme.colors.primary}; */

  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
    height: 100vh;
 }
`;

const HorizontalContainerWrapper = styled.div`
display: block;
/* grid-template-columns: 1fr; */
border: 1px solid blue;
`

const HorizontalCarousel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  border: 1px solid lime;
  @media only screen and (max-width: ${BreakpointMobile + 'px'}) {
      height: 100vh;
    grid-template-columns:1fr;
 }
`;

const CarouselContainer = styled.div`
height: 100%;
max-height: 100%;
width: 100%;
border: 1px solid blue;

`

const TitleContainer = styled.div`
height: 50px;
width: 100%;
border: 1px solid red;
`
const TitleSubContainer = styled.div`
display: inline-grid;
height: 100%;
width:100%;
justify-content: center;
grid-template-columns: 1fr 1fr;
border: 1px solid lime;
`

const TitleText = styled.h1`
font-size: 20px;
margin: auto;
font-family: ${(props) => props.theme.fonts.primary};
color: ${(props) => props.theme.colors.secondary};
border: 1px solid red;

`

const WebApps = styled.div`
  height: 50%;
  border: 1px solid purple;
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
    color: ${(props) => props.theme.colors.secondary};
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
            <CarouselContainer>
              <Carousel components={[<CryptoWebApp/>, <GitHubJobsApp/>]}/>
            </CarouselContainer>
              {/* <img src={'git_logo.png'} /> */}
                  
        </WebApps>
        <MobileApps>
        <CarouselContainer>
              <Carousel />
            </CarouselContainer>
        </MobileApps>
      </HorizontalCarousel>
      </HorizontalContainerWrapper>
    </Container>
  );
};
