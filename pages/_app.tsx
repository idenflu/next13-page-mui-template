import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import createEmotionCache from "@/lib/emotionCache";
import {CacheProvider, EmotionCache} from "@emotion/react";
import {NextPage} from "next";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/lib/theme";
import Head from "next/head";
import NextAuthSession from "@/lib/NextAuthSession";

type AppPropsWithCache = AppProps & {
    Component: NextPage;
    emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
                   Component,
                   emotionCache = clientSideEmotionCache,
                   pageProps,
               }: AppPropsWithCache) => {
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name='viewport' content='initial-scale=1, width=device-width' />
            </Head>

            <NextAuthSession>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </NextAuthSession>
        </CacheProvider>
    );
};

export default MyApp;