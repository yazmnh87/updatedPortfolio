import Document, { Html, Head, Main, NextScript} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document{
static async getInitialProps(ctx){
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try{
        ctx.renderPage = () => 
        originalRenderPage({
            enhanceApp: App => props => sheet.collectStyles(<App {...props}/>),
        })
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
                <>
                {initialProps.styles}
                {sheet.getStyleElement()}
                </>
            ),
        }
    }finally{
        sheet.seal()
    }
}

render(props){
    return (
        <Html style={{fontSize:'62.5%'}}>
            <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177199778-1"></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());
                        gtag('config', 'UA-177199778-1');`
                    }}/>
                <link rel="stylesheet" href="spinkit.min.css"/>
                <link rel="shortcut icon" type="image/png" href="2.jpg" />
            </Head>
            <body style={{margin: 0}}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
}