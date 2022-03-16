import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/GlobalStyles'
import { GlobalStyles as TwGlobal } from 'twin.macro'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>insoodev</title>
            </Head>
            <TwGlobal />
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
