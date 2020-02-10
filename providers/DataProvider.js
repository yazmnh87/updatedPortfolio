import React, {useState, useEffect, createContext} from 'react'
import { WakaTimeClient, RANGE } from 'wakatime-client';
const DataContext = createContext()


export const DataProvider = props =>{
const [state, setState] = useState({
    wakaId: ''
})
const client = new WakaTimeClient(process.env.wakaTimeClient)

const myInfo = async() =>{
    const myUserDetails = await client.getMe();
    console.log(myUserDetails)
     setState({...state, wakaId: myUserDetails.data.id})
}

const getWakaStats = async (id) => {
    console.log(id)
    const stats = await client.getUserStats({
        userId: id,
        range: RANGE.LAST_7_DAYS
      });
      console.log(stats)
      return stats
}

useEffect(()=>{
   myInfo()
},[])

    return (
        <DataContext.Provider value={{...props, ...state, getWakaStats}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContext;