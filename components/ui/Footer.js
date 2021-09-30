import styled from 'styled-components'

import { IndieAddress } from '../../util/constants'
import { A } from './Typography'

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0 5px;
  }
`

const Footer = () => (
  <Wrapper>
    <A href="https://twitter.com/theindiedao" target="_blank">
      @theindiedao
    </A>
    <span>|</span>
    <A href="https://2c.io/indiedao" target="_blank">
      read more
    </A>
    <span>|</span>
    <A
      href={`https://etherscan.io/token/${IndieAddress}#balances`}
      target="_blank"
    >
      etherscan
    </A>
  </Wrapper>
)

export default Footer
