import Head from 'next/head'
import styled from 'styled-components'

import IndieTokenHoldersList from '../components/IndieTokenHoldersList'
import Footer from '../components/ui/Footer'
import { H1 } from '../components/ui/Typography'

const Home = () => (
  <Wrapper>
    <Head>
      {/* Base: */}
      <title>IndieDAO</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content="IndieDAO" />
      {/* Twitter: */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`https://indie.2c.io`} />
      <meta name="twitter:title" content="IndieDAO" />
      <meta name="twitter:description" content="IndieDAO" />
      <meta
        name="twitter:image"
        content="https://indie.2c.io/images/twitter.jpg"
      />
      <meta name="twitter:creator" content="@theindiedao" />

      {/* OG / Facebook: */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="IndieDAO" />
      <meta property="og:description" content="IndieDAO" />
      <meta property="og:site_name" content="IndieDAO" />
      <meta property="og:url" content={`https://indie.2c.io`} />
      <meta
        property="og:image"
        content="https://indie.2c.io/images/facebook.jpg"
      />
    </Head>
    <main>
      <Layout>
        <H1>Token Holders</H1>
        <Star height={60} src="/images/star.svg" />
        <IndieTokenHoldersList />
      </Layout>
      <Footer />
    </main>
  </Wrapper>
)

const Wrapper = styled.div``

const Layout = styled.div`
  padding: 80px 20px 20px;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  text-align: center;
`

const Star = styled.img`
  margin: 0 auto;
`

export default Home
