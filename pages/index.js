import React from 'react'
import styled from 'styled-components'
import {Navbar} from '../components/Navbar'
import {HeaderSection} from '../components/HeaderSection'
import {MainContainer} from '../components/MainContainer'
// import { WakaTimeClient, RANGE } from 'wakatime-client';
// const client = new WakaTimeClient(process.env.wakaTimeClient)


const Index = ({stats}) => {
    return(
        <>
        <Navbar />
        <HeaderSection />
        <MainContainer stats={stats}/>
        </>
    )
}

// Index.getInitialProps = async (ctx) => {
//     const myUserDetails = await client.getMe();
//     if(myUserDetails){
//         console.log("IMPORTANT", myUserDetails)
//         const stats = await client.getUserStats({
//             userId: myUserDetails.data.id,
//             range: RANGE.LAST_7_DAYS
//           });
//           console.log(stats)
//           return stats
//     }

// }

export default Index;