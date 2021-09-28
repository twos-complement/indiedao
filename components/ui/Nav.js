import styled from 'styled-components'
import { useEthers, useLookupAddress, shortenAddress } from '@usedapp/core'

import { H1 } from '../../components/ui/Typography'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const ConnectButton = styled.div`
  padding: 20px;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.secondary100};
  font-family: 'Matter';
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.4rem;
  transition: all 500ms;

  &:hover {
    background-color: ${props => props.theme.colors.secondary100};
  }
`

const Nav = () => {
  const { activateBrowserWallet, account } = useEthers()
  const address =
    useLookupAddress() || (account ? shortenAddress(account) : false)

  const router = useRouter()

  return (
    <Wrapper>
      <Link href="/">
        <H1>IndieDAO</H1>
      </Link>
      <ConnectButton onClick={activateBrowserWallet}>
        {address && address}
        {!address && 'Connect'}
      </ConnectButton>
    </Wrapper>
  )
}

export default Nav
