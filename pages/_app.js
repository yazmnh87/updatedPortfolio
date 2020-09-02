import App from 'next/app';
import Theme from '../providers/ThemeProvider'
import { WakaTimeClient, RANGE } from 'wakatime-client';
import {DataProvider} from '../providers/DataProvider'

 function MyApp({Component, pageProps}){
    return (
        <DataProvider>
        <Theme>
            <Component {...pageProps}/>
        </Theme>
        </DataProvider>
        
    )
}
// const client = new WakaTimeClient(process.env.wakaTimeClient)
// MyApp.getInitialProps = async (appContext) => {
//     const myUserDetails = await client.getMe();
//      if(myUserDetails){
//          console.log("IMPORTANT", myUserDetails)
//          const stats = await client.getUserStats({
//              userId: myUserDetails.data.id,
//              range: RANGE.LAST_7_DAYS
//            });
//            console.log(stats)
//            return stats
//      }
//      }

export default MyApp