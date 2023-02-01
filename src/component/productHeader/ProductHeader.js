import React, { useState, useEffect, useContext } from 'react'
import headerlogo from '../../assets/xrc.png'
import { utils } from 'ethers';
import { Context } from '../../Context';


import './productHeader.css'
import { Link } from 'react-router-dom';

const ProductHeader = () => {

  const {walletAddress, setWalletAddress} = useContext(Context)

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

  useEffect(() => {
    getCurrentWalletConnected()
  }, [])

  useEffect(() => {
    addWalletListener()
  }, [walletAddress])
  
  const connectWallet = async () => {
    const isConnected = localStorage.getItem("isConnected")
    console.log("connecting")
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      // MetaMask present
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })

        // const chainId = networkMap.POLYGON_MAINNET.chainId // Polygon Mainnet
        const chainId = networkMap.MUMBAI_TESTNET.chainId // MUMBAI TESTNET

        if (isConnected === 'false' && window.ethereum.networkVersion !== chainId) {
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
        // document.getElementById("header-btn").classList.add("dropdown-toggle")
        document.getElementById("header-btn").setAttribute("data-bs-toggle", "dropdown")
      } catch (err) {
        console.log(err.message)
      }
    } else {
      // MetaMask absent
      // setMessage("Please install MetaMask")
      console.log("Please install MetaMask")
    }
  }

  // Update after page load
  const getCurrentWalletConnected = async () => {
    if (localStorage.getItem("isConnected") === 'true') {
      console.log("refreshed")
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          })
  
          if (accounts.length > 0) {
            // console.log(accounts)
            // setIsConnected(true)
            setWalletAddress(accounts[0])
            document.getElementById("header-btn").setAttribute("data-bs-toggle", "dropdown")
          } else {
            // setMessage("Connect to MetaMask using the above button")
            console.log("Connect to MetaMask using the above button")
          }
        } catch (err) {
          // setMessage(err.message)
          console.log(err.message)
        }
      } else {
        // MetaMask absent
        // setMessage("Please install MetaMask")
        console.log("Please install MetaMask")
      }
    }
  }

  // Listening to account changes on metamask
  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        console.log(accounts)
        if (accounts.length > 0) {
          console.log("account changed")
          setWalletAddress(accounts[0])
        } else {
          console.log("disconnecting")
          setWalletAddress("")
          localStorage.setItem("isConnected", false)
          document.getElementById("header-btn").setAttribute("data-bs-toggle", "")
        }
      })
    } else {
      setWalletAddress("")
      // setMessage("Please install MetaMask")
      console.log("Please install MetaMask")
    }
  }

  // Simulates disconnection
  const disconnect = async () => {
    console.log("disconnecting")
    await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [
        {
          eth_accounts: {}
        }
      ]
    })

    setWalletAddress("")
    localStorage.setItem("isConnected", false)
    document.getElementById("header-btn").setAttribute("data-bs-toggle", "")
  }
  
  // const changeNetwork = async () => {
  //   try {
  //     if (!window.ethereum) throw new Error("No crypto wallet found")
  //     await window.ethereum.request({
  //       method: "wallet_addEthereumChain",
  //       params: [networkMap.POLYGON_MAINNET],
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <>
      <div className='header-container'>

        <a href="#top">
          <img src={headerlogo} alt="" className="header-logo" />
        </a>

        <div className="dropdown">
          <button onClick={connectWallet} id="header-btn" className='header-button text-center dropdown-toggle' type="button" aria-expanded="false" style={{ fontFamily: "Druk Wide Medium" }}>
            {walletAddress && walletAddress.length > 0
            ? `${walletAddress.substring(
                0,
                8
              )}...${walletAddress.substring(38)}`
            : "Connect Wallet"}
          </button>

          <ul className="dropdown-menu header-button" style={{ fontFamily: "Druk Wide Medium" }}>
            <li className='dropdown-items p-1'>
              <Link to="/assets">Assets</Link></li>
            <li className='dropdown-items p-1 pt-2' onClick={disconnect}>Disconnect Wallet</li>
            {/* <li className='dropdown-items p-1 pt-2' onClick={changeNetwork}>Switch Network</li> */}
          </ul>

        </div>

      </div>
    </>
  )
}

export default ProductHeader