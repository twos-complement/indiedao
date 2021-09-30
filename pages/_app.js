import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { Web3Provider } from '../components/contexts/Web3Context'
import theme from '../util/theme'
import GlobalStyles from '../components/ui/GlobalStyles'
import Web3Layout from '../components/layouts/Web3Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="IndieDAO" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Web3Provider>
          <Web3Layout>
            <Component {...pageProps} />
          </Web3Layout>
        </Web3Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
