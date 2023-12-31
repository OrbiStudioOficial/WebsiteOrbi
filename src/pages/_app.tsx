import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import NextNprogress from 'nextjs-progressbar'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import GoogleAnalytics from 'components/GoogleAnalytics'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Orbi Studio 3D - Home</title>
        <link rel="shortcut icon" href="/img/logoorbi.png" />
        <link rel="apple-touch-icon" href="/img/logoorbi.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ED533F" />
        <meta name="Orbi Studio 3D" content="Orbi Studio 3D" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#ED533F"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
