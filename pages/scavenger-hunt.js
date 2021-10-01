import Head from 'next/head'
import styled from 'styled-components'

import Footer from '../components/ui/Footer'
import { H1, A, Body1 } from '../components/ui/Typography'

const ScavengerHuntPage = () => {
  const images = []
  for (var i = 1; i < 97; i++) {
    const number = i.toString().padStart(4, '0')
    images.push(
      <img key={i} src={`/images/launch-scavenger-hunt/${number}.png`} />,
    )
  }

  return (
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
          <Content>
            <Body1>
              Indies joined{' '}
              <A
                href="https://play.decentraland.org/?island=Iwb6&position=60%2C139&realm=unicorn"
                target="_blank"
              >
                Decentraland
              </A>{' '}
              (thanks for the rental HPrivakos!) to preview the scavenger hunt
              prize NFTs, then headed over to{' '}
              <A
                href="https://www.cryptovoxels.com/play?coords=N"
                target="_blank"
              >
                Cryptovoxels
              </A>{' '}
              to search for the following items:{' '}
              <em>
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
                ].join(', ')}
              </em>
              .
            </Body1>
            <Body1>
              After a 4 way tie for 1st place, brolag.eth, Julian, and David
              took the Indie art NFT prizes!
            </Body1>
            <div>
              <A href="https://opensea.io/collection/indiedao" target="_blank">
                View on Opensea
              </A>
            </div>
          </Content>
          <ImageList>{images}</ImageList>
        </Layout>
        <Footer />
      </main>
    </Wrapper>
  )
}

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

const Content = styled.div`
  display: grid;
  grid-row-gap: 20px;
`

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
`

export default ScavengerHuntPage
