import { init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import coinbaseModule from '@web3-onboard/coinbase';

import DappIcon from '../utils/icon';

  const cid='0x1';
  const ctoken='ETH';
  const clabel='Ethereum Mainnet';
  const RPC_URL = "https://eth-mainnet.g.alchemy.com/v2/F0al7kaxZLS99s19_dDdXTsuecnClqIT";


  // const cid='0x5';
  // const ctoken='GoerliETH';
  // const clabel='Ethereum Goerli Testnet';
  // const RPC_URL = "https://eth-goerli.g.alchemy.com/v2/ywnPXNz_p5XwglELnL1LJUxeXwjvAnPb";


const injected = injectedModule()
const walletConnect = walletConnectModule()
const coinbaseWallet = coinbaseModule()

const initOnboard = init({
  wallets: [injected,walletConnect,coinbaseWallet],
  chains: [
    {
      id: cid,
      token: ctoken,
      label: clabel,
      rpcUrl: RPC_URL
    }
  ],
  appMetadata: {
    name: 'Staking Dapp',
    icon: DappIcon,
    description: 'Staking DAPP',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
    ],
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://www.blocknative.com/terms-conditions',
      privacyUrl: 'https://www.blocknative.com/privacy-policy'
    },
  }
})

export { initOnboard }
