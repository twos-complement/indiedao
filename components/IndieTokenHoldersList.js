import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Milestone0Mints } from '../util/constants'
import { toFullTokenAmount } from '../util/helpers'
import useWeb3 from './hooks/useWeb3'
import { Body1 } from './ui/Typography'

const IndieTokenHoldersList = () => {
  const [balances, setBalances] = useState({})
  const [loading, setLoading] = useState(true)
  const { contracts, accounts } = useWeb3()

  useEffect(() => {
    if (!contracts || !contracts.Indie) return

    async function loadIndieBalances() {
      const balances = {}
      const addresses = Object.keys(Milestone0Mints)
      for (var i = 0; i < addresses.length; i++) {
        const balance = await contracts.Indie.methods
          .balanceOf(addresses[i])
          .call()
        balances[addresses[i]] = balance
      }
      setBalances(balances)
      setLoading(false)
    }

    loadIndieBalances()
  }, [contracts])

  return (
    <Layout>
      {accounts.length == 0 && <Body1>(please connect to wallet)</Body1>}
      {accounts.length && loading && <Body1>Loading...</Body1>}
      {accounts.length && !loading && (
        <ul>
          {Object.keys(balances).map(address => (
            <li key={address}>
              {address}: {toFullTokenAmount(balances[address])}
            </li>
          ))}
        </ul>
      )}
    </Layout>
  )
}

const Layout = styled.div``

export default IndieTokenHoldersList
