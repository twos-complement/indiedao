import styled from 'styled-components'

import Nav from '../ui/Nav'

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  border: 12px solid ${props => props.theme.colors.base900};
`

const Web3Layout = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  )
}

export default Web3Layout
