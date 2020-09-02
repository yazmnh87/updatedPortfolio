import App from 'next/app';
import Theme from '../providers/ThemeProvider'


 function MyApp({Component, pageProps}){
    return (
        <Theme>
            <Component {...pageProps}/>
        </Theme>
        
    )
}


export default MyApp