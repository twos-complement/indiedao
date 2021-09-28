import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import theme from '../util/theme'
import GlobalStyles from '../components/ui/GlobalStyles'
import Web3Layout from '../components/layouts/Web3Layout'

import { ChainId, DAppProvider } from '@usedapp/core'

const config = {
  readOnlyChainId:
    process.env.NODE_ENV == 'development' ? ChainId.Rinkeby : ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Rinkeby]:
      'https://rinkeby.infura.io/v3/2066aac4b30348feb96e6b517c3c3df0',
    [ChainId.Mainnet]:
      'https://mainnet.infura.io/v3/2066aac4b30348feb96e6b517c3c3df0',
  },
}

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
        <DAppProvider config={config}>
          <Web3Layout>
            <Component {...pageProps} />
          </Web3Layout>
        </DAppProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
