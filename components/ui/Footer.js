import styled from 'styled-components'

import { IndieAddress } from '../../util/constants'
import { A } from './Typography'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 75px;
  width: 100%;
  background-color: ${props => props.theme.colors.base900};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding: 0 5px;
  }
`

const Footer = () => (
  <Wrapper>
    <A href="https://twitter.com/theindiedao" target="_blank" color="white">
      @theindiedao
    </A>
    <span>|</span>
    <A href="https://2c.io/indiedao" target="_blank" color="white">
      read more
    </A>
    <span>|</span>
    <A
      href={`https://etherscan.io/token/${IndieAddress}#balances`}
      target="_blank"
      color="white"
    >
      etherscan
    </A>
  </Wrapper>
)

export default Footer
