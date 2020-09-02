import React from 'react'
import styled from 'styled-components'
import {Navbar} from '../components/Navbar'
import {HeaderSection} from '../components/HeaderSection'
import {MainContainer} from '../components/MainContainer'


const Index = (props) => {
    console.log("propsINDX",{props})
    return(
        <>
        <Navbar />
        <HeaderSection />
        <MainContainer />
        </>
    )
}

export default Index;

export async function getStaticProps(context) {
    const client = new WakaTimeClient(process.env.wakaTimeClient)
    const myUserDetails = await client.getMe();
     if(myUserDetails){
         console.log("IMPORTANT", myUserDetails)
         const stats = await client.getUserStats({
             userId: myUserDetails.data.id,
             range: RANGE.LAST_7_DAYS
            });
             return {
               props: {stats}, // will be passed to the page component as props
             }
            }
  }