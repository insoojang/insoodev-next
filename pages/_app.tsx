import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/GlobalStyles'
import { GlobalStyles as TwGlobal } from 'twin.macro'
import OgImage from '../public/images/og.png'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Frontend Engineer, Jang In Soo"
                />
                <meta name="author" content="Jang In Soo" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="insoo" />
                <meta property="og:image" content={OgImage.src} />
                <meta property="og:url" content="//" />
                <meta name="keywords" content="" />
                <title>insoodev</title>
            </Head>
            <TwGlobal />
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
