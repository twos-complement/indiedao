import Head from 'next/head'
import styled from 'styled-components'

import Footer from '../components/ui/Footer'
import { H1, A } from '../components/ui/Typography'

const ScavengerHuntPage = () => (
  <Wrapper>
    <Head>
      {/* Base: */}
      <title>Scavenger Hunt - IndieDAO</title>
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
        <H1>Scavenger Hunt</H1>
        <Star height={60} src="/images/star.svg" />
        <List>
          <ListItem>
            <A
              href="https://www.cryptovoxels.com/play?coords=N"
              target="_blank"
            >
              Enter Cryptovoxels
            </A>
          </ListItem>
          {[
            'ethereum logo',
            'animal',
            'another person',
            'art gallery',
            'piece of clothing',
            'tree',
            'weapon',
            'bed',
            'bored ape',
            'food',
            'flower',
            'drink',
            'musical instrument',
            'boat',
            'cryptopunk',
            'car',
            'mario or zelda character',
          ].map(item => (
            <ListItem key={item}>
              <input type="checkbox" id={item} name={item} value={item} />
              {item}
            </ListItem>
          ))}
        </List>
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

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 80px;
`

const ListItem = styled.li`
  padding: 0 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    width: 20px;
  }
`

export default ScavengerHuntPage
