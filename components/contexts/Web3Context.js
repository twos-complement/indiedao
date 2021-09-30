import { useEffect, createContext, useState } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from 'web3'
import Web3Modal from 'web3modal'

import IndieABI from '../../util/abis/indie.json'
import { InfuraId, IndieAddress } from '../../util/constants'

export const Web3Context = createContext()

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: InfuraId,
    },
  },
}

export const Web3Provider = ({ children }) => {
  const [web3Modal, setWeb3Modal] = useState()
  const [accounts, setAccounts] = useState([])
  const [contracts, setContracts] = useState({})
  const [web3, setWeb3] = useState()
  const [provider, setProvider] = useState()

  useEffect(() => {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    })
    setWeb3Modal(web3Modal)
  }, [])

  async function connect() {
    const provider = await web3Modal.connect()
    const web3 = new Web3(provider)
    const accounts = await web3.eth.getAccounts()

    // Set provider:
    setProvider(provider)
    setWeb3(web3)

    // Set accounts:
    setAccounts(accounts)

    // Initialize contracts:
    const Indie = new web3.eth.Contract(IndieABI, IndieAddress)
    setContracts({
      ...contracts,
      Indie,
    })

    // Watch for address changes:
    provider.on('accountsChanged', accounts => {
      setAccounts(accounts)
    })
  }

  async function disconnect() {
    await web3Modal.clearCachedProvider()

    if (provider?.disconnect && typeof provider.disconnect === 'function') {
      await provider.disconnect()
    }

    setProvider(null)
    setAccounts([])
  }

  return (
    <Web3Context.Provider
      value={{
        connect,
        disconnect,
        accounts,
        contracts,
        web3,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Context
