import React, {useContext} from "react";

import './product.css'

import ProductHeader from "../productHeader/ProductHeader";
import { utils } from 'ethers';

import { Context } from "../../Context";

// based on the product id show the product info

const Product = () => {

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

  const connectWallet = async () => {
    console.log("connecting")
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      // MetaMask present
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })

        const chainId = networkMap.POLYGON_MAINNET.chainId // Polygon Mainnet

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
                    params: [networkMap.POLYGON_MAINNET],
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

        const chainId = networkMap.POLYGON_MAINNET.chainId // Polygon Mainnet
        const currentChainId = utils.hexValue(parseInt(window.ethereum.networkVersion))
        const isConnected = localStorage.getItem("isConnected")

        if (isConnected === 'true' && window.ethereum.networkVersion && currentChainId === chainId) {
          console.log("Purchase successful")
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

      const chainId = networkMap.POLYGON_MAINNET.chainId // Polygon Mainnet

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
                params: [networkMap.POLYGON_MAINNET],
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
