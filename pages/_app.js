import App from 'next/app';
import Theme from '../providers/ThemeProvider'

export default function({Component, pageProps}){
    return (
        <Theme>
            <Component {...pageProps}/>
        </Theme>
    )
}