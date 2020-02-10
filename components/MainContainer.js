import React,{useContext, useState, useEffect} from 'react';
import DataContext from '../providers/DataProvider'
import styled from 'styled-components';
import { LanguageItem } from '../components/LanguageItem'

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
const Title = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 0 0 0;

.main{
    font-family: ${props=> props.theme.fonts.primary};
    font-size: 20px;
    color: ${props=> props.theme.colors.secondary};
    font-weight:700;
}

.sub{
    font-family: ${props=> props.theme.fonts.primary};
    font-size: 16px;
    color: ${props=> props.theme.colors.secondary};
}

.waka{
    font-family: ${props=> props.theme.fonts.primary};
    font-size: 11px;
    color: ${props=> props.theme.colors.primary};
}
`
const Stats = styled.div`
display: flex;
flex-direction: column;
align-items:center;
border: 1px solid lime;
`

export const MainContainer = props => {
    const {wakaId,getWakaStats} = useContext(DataContext)
    const [state, setState] = useState({
        totalTime: '',
        languages: [],
        loading: false
    })
    useEffect(()=>{
        loadData()
    },[wakaId])
const loadData = async() => {
setState(prevState=>({...prevState, loading: true}))
const data = await getWakaStats(wakaId)
if(data.data){
    console.log("what is this", data.data.languages)
    setState(prevState=>({...prevState, totalTime: data.data.human_readable_total_including_other_language, languages: [...state.languages, ...data.data.languages], loading: false}))
}
}
const mappedTime = state.languages.length !== 0 ? state.languages.map((language,i) => {
    return <LanguageItem language={language}/>
}) : null
    return(
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
                <span className="waka">stats provided by <a href="https://wakatime.com/">WakaTime</a></span>
                </div>
                </Title>
                <Stats>
                    <span>Total Time: {state.totalTime}</span>
                            {mappedTime}
                </Stats>
            </SideBar>
            <HorizontalCarousel>

            </HorizontalCarousel>

        </Container>
    )
}