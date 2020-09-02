import { WakaTimeClient, RANGE } from 'wakatime-client';
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