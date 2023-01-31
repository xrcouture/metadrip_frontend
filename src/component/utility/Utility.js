import React, { useState, useEffect } from "react";
import "./utility.css";
import { useParams } from "react-router-dom";
import CryptoConvert from "crypto-convert";
import $ from "jquery";
import { Link } from "react-router-dom";
import { items } from "../../data's/utility";
import { RxTwitterLogo,RxDiscordLogo,RxLinkBreak2 } from 'react-icons/rx';
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import { Alchemy, Network } from "alchemy-sdk";
import { getContractInstance } from "../../data's/helper";


function Utility() {
  const config = {
    apiKey: "g7dUSvAcvJnj2Qf0HOIHlxindWYB88gu",
    network: Network.MATIC_MAINNET,
  };
  const [nft,setNfts] = useState([]);

  const alchemy = new Alchemy(config);

  const collectionAddress = [
    "0xEDe30DF507576e461cc2cB3AdA75bf9B22dc778d", //phase 1
    "0x99D6C0d1A656a1ee1F345AE6482D0aFD76daF8a5", //phase 2
  ];  

  useEffect(() => {
    var temp = {
      "Chrome Heart":0,
      "Puffy Crossroads":0,
      "Oyster Spell":0,
      "Vibrance Splash":0,
      "Flora Flamboyance":0,
      "Rufflanza":0,
      "Star Cloak":0,
      "Celestial Dream":0,
      "Dazzling Devil":0,
      "Pop Kiss":0,
      "Comic Boom":0,
      "Human Masquerade":0,
    }
    // const convert = new CryptoConvert({
    //   cryptoInterval: 2000, //Crypto prices update interval in ms (default 5 seconds on Node.js & 15 seconds on Browsers)
    //   fiatInterval: 60 * 1e3 * 60, //Fiat prices update interval (default every 1 hour)
    //   calculateAverage: true, //Calculate the average crypto price from exchanges
    //   binance: true, //Use binance rates
    //   bitfinex: true, //Use bitfinex rates
    //   coinbase: true, //Use coinbase rates
    //   kraken: true, //Use kraken rates
    //   // onUpdate: (tickers, isFiatUpdate?)=> any, //Callback on every crypto update
    //   HTTPAgent: null, //HTTP Agent for server-side proxies (Node.js only)
    // });

    // setInterval(() => {
    //   console.log(convert.MATIC.USD(1).toFixed(2));
    // },2000);
    alchemy.nft.getNftsForContract(collectionAddress[1]).then(res=>{
      // console.log(res.nfts)
      res.nfts.map((i)=>{
        let t = i.description.split(":")[0]
        temp[i.title]++
      })
    })
    setNfts(temp)
  },[]);
  console.log(nft)
  let { name } = useParams();
  const item = items[name]
  console.log(items)
  setTimeout(()=>{
    console.log(name,nft[name.replace("_"," ")]+1,nft);
    console.log(`available wearables ${10-nft[name.replace("_"," ")]}/10`)
  },1000)
  $(document).ready(function () {
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
  return (
    <div className="utility-page mt-4">
      {/* <iframe src="https://metadrip.xrcouture.com" width="100%" height="500"/> */}
      <div className="row mt-4">
        <div className="col-md-7 col-sm-12 overflow-hidden d-flex justify-content-center d-flex flex-column">
          <video
            src={item.video}
            className="utility-page-video align-self-center"
            muted
            autoPlay
            loop
          />
          <div className="utility-social-container w-100">
            <p>Share</p>
            <div className="d-flex justify-content-around w-100">
            <a href='https://discord.gg/zHJ3UA5CeR' target="_blank" style={{textDecoration:"none"}}>
              <RxDiscordLogo color='#EDE9E9' size={50} className='icon-footer'/>
            </a>
            <a href='https://www.linkedin.com/company/xrcouture/' target="_blank" style={{textDecoration:"none"}}><BsInstagram color='#EDE9E9' size={50} className='icon-footer'/></a>
            <a href='https://twitter.com/XRCouture' target="_blank" style={{textDecoration:"none"}}><RxTwitterLogo color='#EDE9E9' size={50} className='icon-footer'/></a>
            <a href='https://twitter.com/XRCouture' target="_blank" style={{textDecoration:"none"}}><RxLinkBreak2 color='#EDE9E9' size={50} className='icon-footer'/></a>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="asset-details-header">
            <h1
              className="title-asset text-left"
              style={{ fontFamily: "Clash Display Bold" }}
            >
              {" "}
              {item.name}
            </h1>
            <div className="details-container">
              <div>
                <p>Created by</p>
                <h3>{item.designed_by}</h3>
              </div>
              <p className="w-50">
                {item.description}
              </p>
            </div>
            <div className="tab-accordion">
              <div>
                <ul className="nav nav-tabs faq-cat-tabs">
                  <li className="active">
                    <a
                      href="#faq-cat-1"
                      data-toggle="tab"
                      style={{ fontFamily: "Clash Dispaly Light" }}
                    >
                      Utilities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq-cat-2"
                      data-toggle="tab"
                      style={{ fontFamily: "Clash Dispaly Light" }}
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
                              style={{ fontFamily: "Clash Dispaly Bold" }}
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
                              <h5 style={{ color: "#978097" }}>Decentraland</h5>
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
                          <div className="panel-body">
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia,
                              looked up one of the more obscure Latin words,
                              consectetur, from a Lorem Ipsum passage, and going
                              through the cites of the word in classical
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
                          <div className="panel-body">
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia,
                              looked up one of the more obscure Latin words,
                              consectetur, from a Lorem Ipsum passage, and going
                              through the cites of the word in classical
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
                          <h5 style={{ color: "#978097" }}>
                            Contract Id: {item.phase==1?collectionAddress[0]:collectionAddress[1]}
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utility;
