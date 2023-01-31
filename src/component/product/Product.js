import React, {useContext} from "react";

import './product.css'

import ProductHeader from "../productHeader/ProductHeader";
import { utils } from 'ethers';

import { Context } from "../../Context";

import transakSDK from '@transak/transak-sdk'
import { useParams } from "react-router";

// based on the product id show the product info

const Product = () => {

  const {name} = useParams()
  console.log(name)

  const networkMap = {
    POLYGON_MAINNET: {
      chainId: utils.hexValue(137), // '0x89'
      chainName: "Matic(Polygon) Mainnet", 
      nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
      rpcUrls: ["https://polygon-rpc.com"],
      blockExplorerUrls: ["https://www.polygonscan.com/"],
    },
    MUMBAI_TESTNET: {
      chainId: utils.hexValue(80001), // '0x13881'
      chainName: "Matic(Polygon) Mumbai Testnet",
      nativeCurrency: { name: "tMATIC", symbol: "tMATIC", decimals: 18 },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
  }

  const {walletAddress, setWalletAddress} = useContext(Context)

  const settings = {
    // apiKey: 'b48cfd7e-12a9-4be3-90e7-8bd8386735dd',
    // environment: 'PRODUCTION',
    apiKey: '6d705e03-0b9d-4190-bc69-1fcdc7dd80bc',
    environment: 'STAGING',
    defaultCryptoCurrency: 'MATIC',
    themeColor: '732f7e',
    hostURL: window.location.origin,
    widgetHeight: "75 vh",
    widgetWidth: "30vw",
    walletAddress: walletAddress,
    exchangeScreenTitle: "Purchase NFT",
    // fiatCurrency: 'GBP', // If you want to limit fiat selection eg 'GBP'
    // email: 'example@gmail.com', // Your customer's email address
    // redirectURL: '' // Redirect URL of your app    
  }

  const connectWallet = async () => {
    console.log("connecting")
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      // MetaMask present
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })

        // const chainId = networkMap.POLYGON_MAINNET.chainId // Polygon Mainnet
        const chainId = networkMap.MUMBAI_TESTNET.chainId // MUMBAI TESTNET

        if (window.ethereum.networkVersion !== chainId) {
            console.log("switching network")
            try {
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: chainId }],
              })
            } catch (err) {
                // This error code indicates that the chain has not been added to MetaMask
              if (err.code === 4902) {
                console.log("adding network")
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [networkMap.MUMBAI_TESTNET],
                })
              }
            }
        }

        console.log("connected")
        setWalletAddress(accounts[0])
        localStorage.setItem("isConnected", true)
        document.getElementById("header-btn").setAttribute("data-bs-toggle", "dropdown")
      document.getElementById('modal-1').style.display = "none"
      } catch (err) {
        console.log(err.message)
      }
    } else {
      // MetaMask absent
      // setMessage("Please install MetaMask")
      console.log("Please install MetaMask")
    }
  }

  const buyNow = async () => {
    console.log("buying")
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {

        const chainId = networkMap.MUMBAI_TESTNET.chainId // MUMBAI_TESTNET
        const currentChainId = utils.hexValue(parseInt(window.ethereum.networkVersion))
        const isConnected = localStorage.getItem("isConnected") || 'false'

        if (isConnected === 'true' && window.ethereum.networkVersion && currentChainId === chainId) {
          const transak = new transakSDK(settings);
          transak.init();

          transak.on(transak.ALL_EVENTS, (data) => {
              console.log(data)
          });

          // This will trigger when the user closed the widget
          transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (eventData) => {
              console.log(eventData);
              transak.close();
          });

          // This will trigger when the user marks payment is made.
          transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
            console.log(orderData);
            // window.alert("Payment Success")
            // transak.close();
          });
        }
        else if (isConnected === 'true' && window.ethereum.networkVersion && currentChainId !== chainId) {
          console.log(window.ethereum.networkVersion, chainId)
          document.getElementById('modal').style.display = "flex"
        }
        else if (isConnected === 'false') {
          console.log("connect metamask")
          document.getElementById('modal-1').style.display = "flex"
        }

    } else {
      console.log("No wallet")
      // connectWallet()
    }
  }

  // Called when clicked on buy now with different network than polygon,
  const switcher = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {

      const chainId = networkMap.MUMBAI_TESTNET.chainId // MUMBAI_TESTNET

      if (window.ethereum.networkVersion !== chainId) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: chainId }],
          })
        } catch (err) {
            // This error code indicates that the chain has not been added to MetaMask
          if (err.code === 4902) {
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [networkMap.MUMBAI_TESTNET],
            })
          }
        }
      }

      console.log("network switched")
      document.getElementById('modal').style.display = "none"
    }
  }

  return (
    <div className="bg-product">
      <ProductHeader />

      <div className='extra'>
        <button className='buy-now text-white' onClick={buyNow}>buy now</button>

        <div className='switch-network-modal text-white' id='modal' style={{display: "none"}}>
          <div className='modal-title' >Switch Network</div>
          <div className='modal-description'>Wrong network detected. Please Switch.</div>
          <button className='buy-now' onClick={switcher}>Switch Network</button>
        </div>

        <div className='switch-network-modal connect-modal text-white' id='modal-1' style={{display: "none"}}>
          <div className='modal-title' >Connect Wallet</div>
          <div className='modal-description'>No wallet Found, please connect</div>
          <button className='buy-now' onClick={connectWallet}>Connect Wallet</button>
        </div>
      </div>

    </div>
  )
}

export default Product
