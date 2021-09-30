import styled from 'styled-components'
import { useState } from 'react'

import { Milestone0Mints } from '../util/constants'
import useWeb3 from './hooks/useWeb3'
import { Button } from './ui/Buttons'
import { Body1 } from './ui/Typography'
import { toUint256Amount } from '../util/helpers'

const MilestoneMintButton = ({ address, amount }) => {
  const { contracts, accounts } = useWeb3()

  const [loading, setLoading] = useState(false)
  const [complete, setComplete] = useState(false)
  const [error, setError] = useState()

  async function mint() {
    try {
      setLoading(true)
      await contracts.Indie.methods
        .mint(address, toUint256Amount(amount))
        .send({ from: accounts[0] })
      setLoading(false)
      setComplete(true)
    } catch (e) {
      setError(e.message)
    }
  }

  if (error) return <Button>{error}</Button>

  const buttonText = complete
    ? `Successfully minted ${amount} for ${address}!`
    : loading
    ? 'Minting...'
    : `Mint ${amount} to ${address}`

  return (
    <Button onClick={mint} key={address}>
      {buttonText}
    </Button>
  )
}

const MilestoneMintForm = () => {
  const { accounts } = useWeb3()

  if (!accounts.length) return <Body1>(please connect wallet)</Body1>

  return (
    <Layout>
      {Object.keys(Milestone0Mints).map(address => (
        <MilestoneMintButton
          address={address}
          amount={Milestone0Mints[address]}
          key={address}
        />
      ))}
    </Layout>
  )
}

const Layout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`

export default MilestoneMintForm
