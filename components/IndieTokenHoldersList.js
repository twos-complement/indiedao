import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Milestone0Mints } from '../util/constants'
import { toFullTokenAmount } from '../util/helpers'
import useWeb3 from './hooks/useWeb3'
import { H6, Body1 } from './ui/Typography'

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
        <List>
          {Object.keys(balances).map(address => (
            <ListItem key={address}>
              <H6 color="base600">
                {address}:{' '}
                <Highlight>{toFullTokenAmount(balances[address])}</Highlight>
              </H6>
            </ListItem>
          ))}
        </List>
      )}
    </Layout>
  )
}

const Layout = styled.div``

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  padding: 0 0 20px;
`

const Highlight = styled.span`
  background-color: ${props => props.theme.colors.base200};
  font-weight: bold;
`

export default IndieTokenHoldersList
