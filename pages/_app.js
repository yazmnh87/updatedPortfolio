import App from 'next/app';
import Theme from '../providers/ThemeProvider'
import {DataProvider} from '../providers/DataProvider'

export default function({Component, pageProps}){
    return (
        <DataProvider>
        <Theme>
            <Component {...pageProps}/>
        </Theme>
        </DataProvider>
    )
}