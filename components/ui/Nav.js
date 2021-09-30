import styled from 'styled-components'
import Link from 'next/link'

import { H1 } from '../../components/ui/Typography'
import useWeb3 from '../../components/hooks/useWeb3'
import { Button } from '../../components/ui/Buttons'

function maskAddress(address) {
  if (!address) return
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const ButtonWrapper = styled.div`
  width: 200px;
`

const Nav = () => {
  const { connect, disconnect, accounts } = useWeb3()
  const connected = accounts.length > 0

  return (
    <Wrapper>
      <Link href="/">
        <a>
          <H1>IndieDAO</H1>
        </a>
      </Link>
      <ButtonWrapper>
        {!connected && <Button onClick={connect}>Connect Wallet</Button>}
        {connected && (
          <Button onClick={disconnect}>{maskAddress(accounts[0])}</Button>
        )}
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Nav
