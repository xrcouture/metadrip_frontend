import React, { useContext, useEffect, useState } from "react";

import "./product.css";
import CryptoConvert from "crypto-convert";
import { ToastContainer, toast } from 'react-toastify';
import ProductHeader from "../productHeader/ProductHeader";
import { utils } from "ethers";
import { Alchemy, Network } from "alchemy-sdk";
import { DCL_PHASE2_CONTRACT_ADDRESS, getContractInstance, getGasFees } from "../../data's/helper";
import { Context } from "../../Context";

import transakSDK from "@transak/transak-sdk";
import { useAsyncError, useParams } from "react-router";
import { items } from "../../data's/utility";
import Footer from "../Footer/Footer";
import { ethers } from "ethers";
import $ from "jquery";

// based on the product id show the product info

const Product = () => {
  let { name } = useParams();
  const item = items[name];
  const config = {
    apiKey: "g7dUSvAcvJnj2Qf0HOIHlxindWYB88gu",
    // network: Network.MATIC_MAINNET,
    network:Network.MATIC_MUMBAI
  };
  const [nft, setNfts] = useState([]);
  const [nftCost, setNftCost] = useState(0);
  const [available,setAvailable] = useState(0)
  const [costInDollar, setCostInDollar] = useState(0);
  const [id,setId] = useState(item['start'])
  const alchemy = new Alchemy(config);

  const collectionAddress = [
    "0xEDe30DF507576e461cc2cB3AdA75bf9B22dc778d", //phase 1
    "0x99D6C0d1A656a1ee1F345AE6482D0aFD76daF8a5", //phase 2
  ];

  // setId(item['start'])
  const fun=async()=>{
    var temp = {
      "Chrome Heart": 0,
      "Puffy Crossroads": 0,
      "Oyster Spell": 0,
      "Vibrance Splash": 0,
      "Flora Flamboyance": 0,
      "Rufflanza": 0,
      "Star Cloak": 0,
      "Celestial Dream": 0,
      "Dazzling Devil": 0,
      "Pop Kiss": 0,
      "Comic Boom": 0,
      "Human Masquerade": 0,
    };
    const convert = new CryptoConvert({
      cryptoInterval: 2000, //Crypto prices update interval in ms (default 5 seconds on Node.js & 15 seconds on Browsers)
      fiatInterval: 60 * 1e3 * 60, //Fiat prices update interval (default every 1 hour)
      calculateAverage: true, //Calculate the average crypto price from exchanges
      binance: true, //Use binance rates
      bitfinex: true, //Use bitfinex rates
      coinbase: true, //Use coinbase rates
      kraken: true, //Use kraken rates
      // onUpdate: (tickers, isFiatUpdate?)=> any, //Callback on every crypto update
      HTTPAgent: null, //HTTP Agent for server-side proxies (Node.js only)
    });
    // setCostInDollar(convert.MATIC.USD(1).toFixed(2));  
    const contract = await getContractInstance(2);
    let totalSupply = await contract.publicCost();
    // console.log(totalSupply);
    setNftCost(Number(totalSupply._hex) * Math.pow(10, -18));
    setInterval(() => {
      // console.log(convert.MATIC.USD(1).toFixed(2));
      setCostInDollar(convert.MATIC.USD(Number(totalSupply._hex) * Math.pow(10, -18)).toFixed(2));
    }, 400);
    alchemy.nft.getNftsForContract(DCL_PHASE2_CONTRACT_ADDRESS).then((res) => {
      res.nfts.map((i) => {
        let t = i.description.split(":")[0];
        temp[i.title]++;
      });
    });
    setNfts(temp);
    setAvailable(10 - nft[name.replace("_", " ")])
  }
  useEffect(() => {
   fun()
  }, []);
  console.log(nft)


  // console.log(items);
  setTimeout(() => {
    console.log(name, nft[name.replace("_", " ")] + 1, nft);
    console.log(`available wearables ${10 - nft[name.replace("_", " ")]}/10`);
    setAvailable(10 - nft[name.replace("_", " ")])
  }, 1000);
  $(document).on(function () {
    $(".collapse").on("show.bs.collapse", function () {
      var id = $(this).attr("id");
      $('a[href="#' + id + '"]')
        .closest(".panel-heading")
        .addClass("active-faq");
      $('a[href="#' + id + '"] .panel-title span').html(
        '<i class="glyphicon glyphicon-minus"></i>'
      );
    });
    $(".collapse").on("hide.bs.collapse", function () {
      var id = $(this).attr("id");
      $('a[href="#' + id + '"]')
        .closest(".panel-heading")
        .removeClass("active-faq");
      $('a[href="#' + id + '"] .panel-title span').html(
        '<i class="glyphicon glyphicon-plus"></i>'
      );
    });
  });

  // console.log(item["metaverse_wearables"]["sandbox"].status);

  // const { name } = useParams()
  // console.log(name)

  // const item = items[name]
  // console.log(item)

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
  };

  const { walletAddress, setWalletAddress } = useContext(Context);

  const settings = {
    // apiKey: 'b48cfd7e-12a9-4be3-90e7-8bd8386735dd',
    // environment: 'PRODUCTION',
    apiKey: "6d705e03-0b9d-4190-bc69-1fcdc7dd80bc",
    environment: "STAGING",
    defaultCryptoCurrency: "MATIC",
    themeColor: "732f7e",
    hostURL: window.location.origin,
    widgetHeight: "75vh",
    widgetWidth: "30vw",
    walletAddress: walletAddress,
    exchangeScreenTitle: "Purchase NFT",
    // fiatCurrency: 'GBP', // If you want to limit fiat selection eg 'GBP'
    // email: 'example@gmail.com', // Your customer's email address
    // redirectURL: '' // Redirect URL of your app
  };

  const connectWallet = async () => {
    console.log("connecting");
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      // MetaMask present
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // const chainId = networkMap.POLYGON_MAINNET.chainId // Polygon Mainnet
        const chainId = networkMap.MUMBAI_TESTNET.chainId; // MUMBAI TESTNET

        if (window.ethereum.networkVersion !== chainId) {
          console.log("switching network");
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: chainId }],
            });
          } catch (err) {
            // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
              console.log("adding network");
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [networkMap.MUMBAI_TESTNET],
              });
            }
          }
        }

        console.log("connected")
        setWalletAddress(accounts[0])
        localStorage.setItem("isConnected", true)
        document.getElementById("header-btn").setAttribute("data-bs-toggle", "dropdown")
        document.getElementById('connect-modal').style.display = "none"
      } catch (err) {
        console.log(err.message);
      }
    } else {
      // MetaMask absent
      // setMessage("Please install MetaMask")
      console.log("Please install MetaMask");
    }
  };

  const buyNow = async () => {
    console.log("buying");
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      const chainId = networkMap.MUMBAI_TESTNET.chainId; // MUMBAI_TESTNET
      const currentChainId = utils.hexValue(
        parseInt(window.ethereum.networkVersion)
      );
      const isConnected = localStorage.getItem("isConnected") || "false";

      if (
        isConnected === "true" &&
        window.ethereum.networkVersion &&
        currentChainId === chainId
      ) {
        // const transak = new transakSDK(settings);
        // transak.init();

        // transak.on(transak.ALL_EVENTS, (data) => {
        //   console.log(data);
        // });

        // // This will trigger when the user closed the widget
        // transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (eventData) => {
        //   console.log(eventData);
        //   transak.close();
        // });

        // // This will trigger when the user marks payment is made.
        // transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
        //   console.log(orderData);
        //   // window.alert("Payment Success")
        //   // transak.close();
        // });
      const contract = await getContractInstance(2);
      // try {
      //   const seedSale = await contract.setSeedSaleOff();
      //   console.log(seedSale);
      //   toast.success("Seed Sale Off");
      // } catch (error) {
      //   toast.error(`Transaction not successful - ${error.error.data.message.split(":")[2]}`);
      //   console.log(error.error.data.message); 
      // }
      console.log(nft[name.replace("_", " ")]+id+1)
      let totalSupply = await contract.publicCost();
      const { maxFeePerGas, maxPriorityFeePerGas } = await getGasFees();
      const ethereum = window.ethereum;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      
      const provider = new ethers.providers.Web3Provider(ethereum)
      const walletAddress = accounts[0]    // first account in MetaMask
      const signer = provider.getSigner(walletAddress)
      try {
        const tx = await contract.tokenMint(nft[name.replace("_", " ")]+id+1, {
        // const tx = await contract.tokenMint(13, {
          // maxFeePerGas,
          // maxPriorityFeePerGas,
          // value: ethers.utils.parseUnits(totalSupply.toString(), 0),
          value: ethers.utils.parseUnits(totalSupply.toString(), "wei"),
          // gasLimit: 1000000,
        });
        // const tx = await contract.setSeedSaleOn()
        await tx.wait();
        toast.success("Token Minted Successfully")
        console.log(tx);
      } catch (error) {
        console.log(error)
      }
      // const tm = await contract.connect(signer)


      }
      else if (isConnected === 'true' && window.ethereum.networkVersion && currentChainId !== chainId) {
        console.log(window.ethereum.networkVersion, chainId)
        document.getElementById('switch-network-modal').style.display = "flex"
      }
      else if (isConnected === 'false') {
        console.log("connect metamask")
        document.getElementById('connect-modal').style.display = "flex"
      }
    } else {
      console.log("No wallet");
      // connectWallet()
    }
  };

  // Called when clicked on buy now with different network than polygon,
  const switcher = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      const chainId = networkMap.MUMBAI_TESTNET.chainId; // MUMBAI_TESTNET

      if (window.ethereum.networkVersion !== chainId) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chainId }],
          });
        } catch (err) {
          // This error code indicates that the chain has not been added to MetaMask
          if (err.code === 4902) {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [networkMap.MUMBAI_TESTNET],
            });
          }
        }
      }

      console.log("network switched")
      document.getElementById('switch-network-modal').style.display = "none"
    }
  };
  console.log(nft[name.replace("_", " ")])
  return (
    <div className="bg-product">
      <ProductHeader />

      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{zIndex:100000}}
          />
          {/* Same as */}
          <ToastContainer />

      <div className="products-container" style={{ overflowX: "hidden" }}>
        <div className="row mt-4 align-items-start product-video-and-content">
          <h1
            className="title-asset text-left mb-4 d-md-none product-content"
            style={{ fontFamily: "Clash Display Bold" }}
          >
            {/* {" "} */}
            {item.name}
          </h1>

          {/* video */}
          <div className="col-xs-12 col-sm-7 col-md-6 col-lg-6 col-xl-5 overflow-hidden d-flex justify-content-center d-flex flex-column">
            <video
              src={item.video}
              className="utility-page-video align-self-center"
              muted
              autoPlay
              loop
            />
          </div>

          {/* Contents */}
          <div className="col-xs-12 col-sm-5 col-md-6 col-lg-6 col-xl-7 product-content">
            <div className="asset-details-header">
              {/* name */}
              <h1
                className="title-asset text-left mt-5 mt-md-0 d-none d-md-block"
                style={{ fontFamily: "Clash Display Bold" }}
              >
                {/* {" "} */}
                {item.name}
              </h1>

              {/* product desc and buy now */}
              <div className="d-md-flex flex-md-row-reverse mt-md-4 mb-md-5">

                {/* Cost, Quantity, buy now */}
                <div className="prod-cost text-white mt-5 mt-md-0 col-md-5" style={{padding: "0%"}}>
                  <div className="d-flex d-md-block justify-content-between">
                    <div className="prod-cost-details">
                      <div
                        className="product-cost"
                        style={{ color: "#F9F9F9" }}
                      >
                        {costInDollar} $
                      </div>
                      <div
                        className="product-cost"
                        style={{ color: "#D062D3" }}
                      >
                        {nftCost} MAT
                      </div>
                    </div>
                    <div className='extra mt-3 mt-md-2 mt-lg-1 d-none d-md-block '>
                    {10 - nft[name.replace("_", " ")] == 0 ? (
                      // <p className="text-danger">Sold Out</p>
                      <button className='buy-now text-white mt-2' disabled>Sold Out</button>
                      ) : (
                      <button className='buy-now text-white mt-2' onClick={buyNow}>Buy now</button>
                      )}
                    </div>
                    <div className="mt-md-3">
                      <div
                        className="product-cost"
                        style={{ color: "#F9F9F9", textAlign: "right" }}
                      >
                        {10 - nft[name.replace("_", " ")]} / 10
                      </div>
                      <div
                        className="product-cost product-content-subtitle"
                        style={{
                          color: "#F9F9F9",
                          textAlign: "right",
                          fontFamily: "Clash Display Light",
                        }}
                      >
                        Wearables available
                      </div>
                    </div>
                  </div>
                  <div className="extra mt-3 mt-md-0 d-md-none ">
                    {10 - nft[name.replace("_", " ")] == 0 ? (
                      <p className="text-danger">Sold Out</p>
                    ) : (
                      <button
                        className="buy-now text-white mt-2"
                        onClick={buyNow}
                      >
                        Buy now
                      </button>
                    )}
                  </div>
                </div>

                {/* created by and description */}
                <div className="prod-description text-white mt-5 mb-5 mt-md-0 mb-md-0 col-md-7 d-flex flex-column justify-content-around" style={{padding: "0%"}}>
                  <div className="product-creator d-flex align-items-center">
                    <div className="product-creator-img"></div>
                    <div className="product-creator-info ">
                      <div
                        className="product-creator-info-title product-content-subtitle"
                        style={{ fontFamily: "Clash Display Light" }}
                      >
                        Created by
                      </div>
                      <div
                        className="product-creator-info-name"
                        style={{ fontFamily: "Clash Display Bold" }}
                      >
                        {item.designed_by}
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-3 product-content-subtitle"
                    style={{ fontFamily: "Clash Display Light" }}
                  >
                    {item.description}
                  </div>
                </div>
              </div>

              {/* utilities */}
              <div className="tab-accordion mb-5">
                <div>
                  <ul className="nav nav-tabs faq-cat-tabs">
                    <li className="active">
                      <a
                        href="#faq-cat-1"
                        data-toggle="tab"
                        style={{ fontFamily: "Clash Display Medium" }}
                      >
                        Utilities
                      </a>
                    </li>
                    <li>
                      <a
                        href="#faq-cat-2"
                        data-toggle="tab"
                        style={{ fontFamily: "Clash Display Medium" }}
                      >
                        Blockchain Info{" "}
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content faq-cat-content">
                    <div className="tab-pane active in fade" id="faq-cat-1">
                      <div className="panel-group" id="accordion-cat-1">
                        <div className="panel panel-default panel-faq">
                          <div className="panel-heading">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion-cat-1"
                              href="#faq-cat-1-sub-1"
                            >
                              <h4
                                className="panel-title"
                                style={{ fontFamily: "Clash Display SemiBold" }}
                              >
                                Metaverse Wearables
                                <span className="pull-right">
                                  <i className="glyphicon glyphicon-chevron-down" />
                                </span>
                              </h4>
                            </a>
                          </div>
                          <div
                            id="faq-cat-1-sub-1"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body">
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>
                                  Decentraland
                                </h5>
                                <button>Claim</button>
                              </div>
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>Sandbox</h5>
                                <button>Claim</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default panel-faq">
                          <div className="panel-heading">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion-cat-1"
                              href="#faq-cat-1-sub-2"
                            >
                              <h5 className="panel-title">
                                Get 3d Assets
                                <span className="pull-right">
                                  <i className="glyphicon glyphicon-chevron-down" />
                                </span>
                              </h5>
                            </a>
                          </div>
                          <div
                            id="faq-cat-1-sub-2"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body">
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>
                                  CloneX Avatar
                                </h5>
                                <button>Download</button>
                              </div>
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>MetaHuman</h5>
                                <button>Download</button>
                              </div>
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>
                                  Universal Files
                                </h5>
                                <button>Download</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default panel-faq">
                          <div className="panel-heading">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion-cat-1"
                              href="#faq-cat-1-sub-3"
                            >
                              <h4 className="panel-title">
                                Try on AR
                                <span className="pull-right">
                                  <i className="glyphicon glyphicon-chevron-down" />
                                </span>
                              </h4>
                            </a>
                          </div>
                          <div
                            id="faq-cat-1-sub-3"
                            className="panel-collapse collapse"
                          >
                            <div
                              className="panel-body"
                              style={{ color: "rgb(151, 128, 151)" }}
                            >
                              <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default panel-faq">
                          <div className="panel-heading">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion-cat-1"
                              href="#faq-cat-1-sub-4"
                            >
                              <h4 className="panel-title">
                                Claim Virtual Fitting
                                <span className="pull-right">
                                  <i className="glyphicon glyphicon-chevron-down" />
                                </span>
                              </h4>
                            </a>
                          </div>
                          <div
                            id="faq-cat-1-sub-4"
                            className="panel-collapse collapse"
                          >
                            <div
                              className="panel-body"
                              style={{ color: "rgb(151, 128, 151)" }}
                            >
                              <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="faq-cat-2">
                      <div
                        className="panel-group"
                        id="accordion-cat-2 color-white"
                      >
                        <ul>
                          <li>
                            <h5 style={{ color: "#978097" }}>
                              Blockchain : POLYGON
                            </h5>
                          </li>
                          <li>
                            <h5 style={{ color: "#978097" }}>Contract Id:</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modals */}
          <div className="modal-background">
            <div className='switch-network-modal text-white' id='switch-network-modal' style={{ display: "none" }}>
              <div className='modal-title' style={{fontFamily: "Clash Display SemiBold", fontSize: "1.5rem"}}>Wrong Network Detected</div>
              <div className='modal-description' style={{fontFamily: "Clash Display Light", fontSize: "1rem"}}>You need to be connected to Polygon Mainnet to buy, but you are currently connected to different network.</div>
              <button className='buy-now' style={{width: "100%", fontFamily: "Clash Display SemiBold"}} onClick={switcher}>Switch To Polygon Mainnet</button>
            </div>

            <div className='switch-network-modal connect-modal text-white' id='connect-modal' style={{ display: "none" }}>
              <div className='modal-title' style={{fontFamily: "Clash Display SemiBold", fontSize: "1.5rem"}}>Please Connect Your Wallet</div>
              <div className='modal-description' style={{fontFamily: "Clash Display Light", fontSize: "1rem"}}>You need to connect your MetaMask Wallet, Please click the below button the connect to MetaMask.</div>
              <button className='buy-now' style={{width: "100%", fontFamily: "Clash Display SemiBold"}} onClick={connectWallet}>Connect Wallet</button>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
